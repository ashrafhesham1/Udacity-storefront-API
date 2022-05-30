import { query } from "../datebase";
import UsersSql from "./sql/userSql";

export type user = {
  id: Number;
  firstName: string;
  lastName: string;
  password: string;
};

export class Users {
  usersSql: UsersSql;

  constructor() {
    this.usersSql = new UsersSql();
  }

  async index(): Promise<user[]> {
    try {
      const res = await query(this.usersSql.index());
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get users ${error}`);
    }
  }

  async show(id: number): Promise<user> {
    try {
      const res = await query(this.usersSql.show(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't get the user ${error}`);
    }
  }

  async create(
    firstName: string,
    lastName: string,
    password: string
  ): Promise<String> {
    try {
      const res = await query(
        this.usersSql.create(firstName, lastName, password)
      );
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot create the user ${error}`);
    }
  }

  async editName(
    firstName: string,
    lastName: string,
    id: number
  ): Promise<string> {
    try {
      const res = await query(this.usersSql.editName(firstName, lastName, id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the user ${error}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const res = await query(this.usersSql.delete(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot delete the user ${error}`);
    }
  }
}
