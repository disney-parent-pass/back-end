import DbAccess from "../../config/dbAccessFiles/users-model";
import bcrypt from "bcryptjs";
import StatusCodes from "../utils/status_codes";

class UserDAO {
  /**
   * The Data Access layer for creating a user
   * @param username : The username of the user
   * @param password : the password of the user
   * @param roleId : the selected Role ID of the user
   * @returns Object: status, and the user created
   */
  async createUser(username: string, password: string, roleId: number) {
    DbAccess.createUser({
      username,
      password: bcrypt.hashSync(password),
      role_id: roleId,
    })
      .then((data) => {
        if (data) {
          return {
            status: StatusCodes.CREATED,
            user: { username: data.username, userId: data.userId },
          };
        }
      })
      .catch((err) => {
        console.error(err);
        return {
          status: StatusCodes.SERVER_ERROR,
          message: "Database unable to create the user",
        };
      });
  }

  /**
   * The Data Access layer for retrieving a user
   * @param username : The username to retrieve
   * @returns The first instance of that username, since it should be unique
   */
  async retrieveUser(username: string): Promise<any> {
    return await DbAccess.findBy({ username }).first();
  }
}

export default new UserDAO();
