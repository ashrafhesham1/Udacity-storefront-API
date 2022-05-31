class CrossModelsSql {
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

  showUserRecentPurchases = (userId: number, rowsNumber: number): string => {
    return `
          SELECT 
              order_id,
              products.id as product_id ,
              products.name as product_name ,
              price,
              quantity,
              price * quantity as total,
              suppliers.name as supplier,
              departments.name as department
          FROM products_orders 
          JOIN orders ON orders.id = products_orders.order_id
          JOIN products ON products.id = products_orders.product_id
          JOIN suppliers ON products.supplier_id = suppliers.id
          JOIN departments ON products.department_id = departments.id
          WHERE user_id = ${userId}
          ORDER BY order_id DESC
          LIMIT ${rowsNumber} 
      ;`;
  };
}

export default CrossModelsSql;
