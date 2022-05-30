import client, { query } from "../datebase";
import OrdersSql from "./sql/ordersSql";

export type order = {
  id: Number;
  user_id: Number;
  active: boolean;
};

export type orderProducts = {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  total: number;
  supplier: string;
  department: string;
};

export class Orders {
  ordersSql: OrdersSql;

  constructor() {
    this.ordersSql = new OrdersSql();
  }

  async index(): Promise<order[]> {
    try {
      const res = await query(this.ordersSql.index());
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get orders ${error}`);
    }
  }

  async show(id: number): Promise<order> {
    try {
      const res = await query(this.ordersSql.show(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't get the order ${error}`);
    }
  }

  async create(userId: number, active: boolean): Promise<Number> {
    try {
      const res = await query(this.ordersSql.create(userId, active));
      return res.rowCount;
    } catch (error) {
      throw new Error(`cannot create the order ${error}`);
    }
  }

  async edit(id: number, active: boolean): Promise<Number> {
    try {
      const res = await query(this.ordersSql.edit(id, active));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the order ${error}`);
    }
  }

  async delete(id: number): Promise<Number> {
    try {
      const res = await query(this.ordersSql.delete(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot delete the order ${error}`);
    }
  }

  async showProducts(id: number): Promise<orderProducts[]> {
    try {
      const res = await query(this.ordersSql.showProductsInOrder(id));
      return res.rows;
    } catch (error) {
      throw new Error(
        `cannot show the products in this order the order ${error}`
      );
    }
  }
}
