class OrdersSql {
  index = (): string => {
    return " SELECT * FROM orders ;";
  };

  show = (id: number): string => {
    return `SELECT * FROM orders WHERE id=${id} ;`;
  };

  create = (userId: number, active: boolean): string => {
    return `INSERT INTO orders (user_id,active) VALUES (${userId},'${active}') ;`;
  };

  edit = (id: number, active: boolean): string => {
    return `UPDATE orders SET active=${active} WHERE id=${id} RETURNING id;`;
  };

  delete = (id: number): string => {
    return `DELETE FROM orders WHERE id = ${id} RETURNING id;`;
  };

  userActiveOrders = (id: number) => {
    return `
         SELECT * FROM orders 
         WHERE user_id=${id} and active=true;`;
  };

  userOrders = (id: number) => {
    return `
         SELECT * FROM orders 
         WHERE user_id=${id};`;
  };
}

export default OrdersSql;
