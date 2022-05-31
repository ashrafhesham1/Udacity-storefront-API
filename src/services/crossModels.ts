import { query } from "../datebase";
import CrossModelsSql from "./sql/crossModelsSql";
import { orderProduct, product } from "./types/Types";

export class CrossModels {
  crossModelsSql: CrossModelsSql;
  constructor() {
    this.crossModelsSql = new CrossModelsSql();
  }

  async showProductsInOrder(id: number): Promise<orderProduct[]> {
    try {
      const res = await query(this.crossModelsSql.showProductsInOrder(id));
      return res.rows;
    } catch (error) {
      throw new Error(
        `cannot show the products in this order the order ${error}`
      );
    }
  }

  async showUserRecentPurchases(
    userId: number,
    rowsNumber: number
  ): Promise<product[]> {
    try {
      const res = await query(
        this.crossModelsSql.showUserRecentPurchases(userId, rowsNumber)
      );
      return res.rows;
    } catch (error) {
      throw new Error(`cannot show the products for this user ${error}`);
    }
  }
}
