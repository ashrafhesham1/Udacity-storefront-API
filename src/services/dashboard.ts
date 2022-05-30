import client from "../datebase";

export type order = {
  id: Number;
  user_id: Number;
  active: boolean;
};

export class Dashboard {
  async userCurrentOrders(id: Number): Promise<order[]> {
    try {
      const connection = await client.connect();
      const sql = ` SELECT * FROM orders WHERE user_id=${id} and active=true;`;
      const res = await connection.query(sql);
      connection.release();
      return res.rows;
    } catch (error) {
      throw new Error(`couldn't get orders ${error}`);
    }
  }
}
