//const db = require('../dbConfig')
import { db } from "../dbConfig";

class DbAccess {
  public async createUser(userObj: {
    username: string;
    password: string;
    role_id: number;
  }) {
    const [id] = await db("users").insert(userObj).returning("id");
    return id;
  }

  public findBy(filter) {
    return db("users").where(filter);
  }

  public findByUsername(username: string) {
    const list = db("users")
      .select("username", "id")
      .where("username", username);
    return list;
  }

  public findById(id: string) {
    return db("users").select("username", "id").where({ id }).first();
  }
}

export default new DbAccess();
