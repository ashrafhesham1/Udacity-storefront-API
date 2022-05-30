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

  showProductsInOrder = (orderId: number): string => {
    return `
            SELECT 
            products.id as product_id ,
            products.name as product_name ,
            price,
            quantity,
            price * quantity as total,
            suppliers.name as supplier,
            departments.name as department
            FROM products_orders
            JOIN products ON products.id = products_orders.product_id
            JOIN suppliers ON products.supplier_id = suppliers.id
            JOIN departments ON products.department_id = departments.id
            WHERE order_id = ${orderId} ;
        `;
  };
}

export default OrdersSql;
