import { query } from "../datebase";
import ProductsSql from "./sql/productsSql";

export type product = {
  id: Number;
  name: string;
  price: Number;
};

export class Products {
  productsSql: ProductsSql;

  constructor() {
    this.productsSql = new ProductsSql();
  }

  async index(): Promise<product[]> {
    try {
      const res = await query(this.productsSql.index());
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get products ${error}`);
    }
  }

  async show(id: number): Promise<product> {
    try {
      const res = await query(this.productsSql.show(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't get the product ${error}`);
    }
  }

  async create(
    name: string,
    price: Number,
    supplierId: number,
    departmentId: number
  ): Promise<string> {
    try {
      const res = await query(
        this.productsSql.create(name, price, supplierId, departmentId)
      );
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot create the product ${error}`);
    }
  }

  async edit(
    id: number,
    newName: string = "",
    newPrice: Number = 0
  ): Promise<string> {
    try {
      const oldProduct = await this.show(id);
      newName = newName || oldProduct.name;
      newPrice = newPrice || oldProduct.price;

      const res = await query(this.productsSql.edit(id, newName, newPrice));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the product ${error}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const res = await query(this.productsSql.delete(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't delete the product ${error}`);
    }
  }
}
