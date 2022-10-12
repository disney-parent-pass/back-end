import UserDAO from "../dao/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { secret } from "../../config/secrets";

const RESPONSE_OK: number = 200;
const CREATED: number = 201;
const BAD_REQUEST: number = 400;
const MISSING_CREDENTIAL: number = 401;

// An  interface for the Promise in createUser
interface UserServiceResponse {
  status: number;
  message: object | string;
}

// An interface modeling the JSON for the Registration/Creation endpoint
interface RegisterUserDTO {
  username: string;
  password: string;
  roleId: number;
}

// An interface modeling the JSON for the Login endpoint
interface LoginUserDTO {
  username: string;
  password: string;
}

class UserService {
  /**
   * The User Creation Service Layer
   * @param userDto : the JSON object representing the credentials for the user
   * @returns Promise<UserServiceResponse>, which will be the status, message
   */
  async createUser(userDto: RegisterUserDTO): Promise<UserServiceResponse> {
    try {
      const { username, password, roleId } = userDto;
      if (!username || !password || !roleId) {
        throw "Please enter all fields";
      }

      let exists = await UserDAO.retrieveUser(username);

      if (exists) {
        return {
          status: BAD_REQUEST,
          message: "Account with that username already exists. Please signin",
        };
      }

      let id = UserDAO.createUser(username, password.toString(), roleId);

      return {
        message: id,
        status: CREATED,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * The User Login Service Layer
   * @param userDto : the JSON object representing the credentials for the user
   * @returns Promise<UserServiceResponse>, which will be the status, message (which is the user info in this case)
   */
  async loginUser(userDto: LoginUserDTO): Promise<UserServiceResponse> {
    try {
      const { username, password } = userDto;

      if (!username || !password) {
        return {
          status: MISSING_CREDENTIAL,
          message: "Missing username or password",
        };
      }

      let user = UserDAO.retrieveUser(username)
        .then((user) => {
          if (user && bcrypt.compareSync(password.toString(), user.password)) {
            const jwt = genToken(user);
            return {
              status: RESPONSE_OK,
              message: {
                userId: user.id,
                username: user.username,
                token: jwt,
              },
            };
          } else {
            return {
              status: MISSING_CREDENTIAL,
              message: "Failed to provide proper credentials",
            };
          }
        })
        .catch((err) => {
          console.log("error: " + err);
          throw err;
        });
      return user;
    } catch (error) {
      console.log("Login error: " + error);
      throw error;
    }
  }
}

export default new UserService();

/**
 * Helper function to generate the JWT token which is set to expire in
 * one day.
 *
 * @param user: object - The user with respective fields
 *
 * @returns JWT Payload
 */
const genToken = (user) => {
  const { id, username } = user;
  const payload = {
    subject: id,
    username: username,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret.jwtSecret, options);
};
