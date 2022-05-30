import { query } from "../datebase";
import SuppliersSql from "./sql/suppliersSql";

export type supplier = {
  id: Number;
  name: string;
  phone: Number;
};

export class Suppliers {
  suppliersSql: SuppliersSql;

  constructor() {
    this.suppliersSql = new SuppliersSql();
  }

  async index(): Promise<supplier[]> {
    try {
      const res = await query(this.suppliersSql.index());
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get supplier ${error}`);
    }
  }

  async show(id: number): Promise<supplier> {
    try {
      const res = await query(this.suppliersSql.show(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't get the supplier ${error}`);
    }
  }

  async create(name: string, phone: Number): Promise<string> {
    try {
      const res = await query(this.suppliersSql.create(name, phone));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot create the product ${error}`);
    }
  }

  async edit(id: number, name: string, phone: Number): Promise<string> {
    try {
      const oldsupplier = await this.show(id);
      name = name || oldsupplier.name;
      phone = phone || oldsupplier.phone;

      const res = await query(this.suppliersSql.edit(id, name, phone));
      return res.rows[0];
    } catch (error) {
      throw new Error(`cannot edit the supplier ${error}`);
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const res = await query(this.suppliersSql.delete(id));
      return res.rows[0];
    } catch (error) {
      throw new Error(`couldn't delete the supplier ${error}`);
    }
  }
}
