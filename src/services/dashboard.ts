import { query } from "../datebase";
import DashpoardSql from "./sql/dashboard";
import {
  product,
  supplier,
  departmentAvg,
  departmentPurch,
} from "./types/Types";

export class Dashboard {
  dashpoardSql: DashpoardSql;
  constructor() {
    this.dashpoardSql = new DashpoardSql();
  }

  async showmostCommonProducts(rowsNumber: number): Promise<product[]> {
    try {
      const res = await query(
        this.dashpoardSql.showMostCommonProducts(rowsNumber)
      );
      return res.rows;
    } catch (error) {
      throw new Error(`cannot show the products ${error}`);
    }
  }

  async showmostCommonSuppliers(rowsNumber: number): Promise<supplier[]> {
    try {
      const res = await query(
        this.dashpoardSql.showMostCommonSuppliers(rowsNumber)
      );
      return res.rows;
    } catch (error) {
      throw new Error(`cannot show the suppliers ${error}`);
    }
  }

  async showAveragePriceInDepartments(): Promise<departmentAvg[]> {
    try {
      const res = await query(
        this.dashpoardSql.showAveragePriceInDepartments()
      );
      return res.rows;
    } catch (error) {
      throw new Error(`cannot show the departments ${error}`);
    }
  }

  async showCommonDepartments(rowsNumber: number): Promise<departmentPurch[]> {
    try {
      const res = await query(
        this.dashpoardSql.showCommonDepartments(rowsNumber)
      );
      return res.rows;
    } catch (error) {
      throw new Error(`cannot show the departments ${error}`);
    }
  }
}
