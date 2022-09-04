//import Users from '../../config/dbAccessFiles/users-model.js'
import DbAccess from "../../config/dbAccessFiles/users-model";

class UserDAO {
  async createUser(username: string, password: string, roleId: number) {
    console.log("---- Made it to the DAO ----");
    DbAccess.createUser({ username, password, role_id: roleId })
      .then((data) => {
        if (data) {
          return {
            status: 201,
            user: { username: data.username, userId: data.userId },
          };
        }
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Database unable to create the user" };
      });
  }

  // TODO:
  async retrieveUser(username: string): Promise<boolean> {
    return false;
  }
}

export default new UserDAO();
