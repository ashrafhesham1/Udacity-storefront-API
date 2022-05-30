import { query } from "../datebase";
import ProductsOrdersSql from "./sql/products_ordersSql";

export type productOrder = {
  orderId: Number;
  productId: Number;
  quantity: Number;
};

export class ProductOrders {
  productsOrdersSql: ProductsOrdersSql;

  constructor() {
    this.productsOrdersSql = new ProductsOrdersSql();
  }

  async create(
    orderId: number,
    productId: number,
    quantity: Number
  ): Promise<number> {
    try {
      const res = await query(
        this.productsOrdersSql.create(orderId, productId, quantity)
      );
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot create the product-order relation ${error}`);
    }
  }

  async edit(
    orderId: number,
    productId: number,
    quantity: number
  ): Promise<number> {
    try {
      const res = await query(
        this.productsOrdersSql.edit(orderId, productId, quantity)
      );
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the order ${error}`);
    }
  }

  async delete(orderId: number, productId: number): Promise<number> {
    try {
      const res = await query(
        this.productsOrdersSql.delete(orderId, productId)
      );
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot delete the product from the order ${error}`);
    }
  }
}
