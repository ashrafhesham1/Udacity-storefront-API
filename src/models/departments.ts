import { query } from "../datebase";
import DepartmentsSql from "./sql/departmentsSql";

export type department = {
  id: Number;
  name: string;
};

export class Departments {
  departmentsSql: DepartmentsSql;

  constructor() {
    this.departmentsSql = new DepartmentsSql();
  }

  async index(): Promise<department[]> {
    try {
      const res = await query(this.departmentsSql.index());
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get department ${error}`);
    }
  }

  async show(id: number): Promise<department> {
    try {
      const res = await query(this.departmentsSql.show(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't get the department ${error}`);
    }
  }

  async create(name: string): Promise<string> {
    try {
      const res = await query(this.departmentsSql.create(name));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot create the department ${error}`);
    }
  }

  async edit(id: number, name: string): Promise<string> {
    try {
      const oldDepartment = await this.show(id);
      name = name || oldDepartment.name;

      const res = await query(this.departmentsSql.edit(id, name));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the department ${error}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const res = await query(this.departmentsSql.delete(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't delete the department ${error}`);
    }
  }
}
