class DashpoardSql {
  showMostCommonProducts = (rowsNumber: number): string => {
    return `
         SELECT 
            products.id as product_id ,
            products.name as product_name ,
            price,
            quantity,
            price * quantity as total,
            suppliers.name as supplier,
            departments.name as department
        FROM products 
        JOIN 
        (
            SELECT product_id, COUNT(*) AS quantity
            FROM products_orders
            GROUP BY product_id
        ) AS products_purchases ON  products_purchases.product_id = products.id 
        JOIN suppliers ON products.supplier_id = suppliers.id
        JOIN departments ON products.department_id = departments.id
        ORDER BY quantity DESC
        LIMIT ${rowsNumber}
      ;`;
  };

  showMostCommonSuppliers = (rowsNumber: number): string => {
    return `
        SELECT 
            id,
            name,
            phone,
            purchases
        FROM suppliers
        JOIN 
        (
            SELECT supplier_id, COUNT(*) AS purchases
            FROM products_orders
            JOIN products ON products.id = products_orders.product_id
            GROUP BY supplier_id
        ) AS suppliers_purchases ON suppliers_purchases.supplier_id = suppliers.id
        ORDER BY purchases DESC
        LIMIT ${rowsNumber}
      ;`;
  };

  showAveragePriceInDepartments = (): string => {
    return `
        SELECT 
            department_id AS id,
            departments.name, 
            average_price
            FROM departments
        JOIN
        (
            SELECT department_id, AVG(price) As average_price
            FROM products
            JOIN departments ON products.department_id = departments.id
            GROUP BY department_id
        ) AS department_avg_price ON departments.id = department_avg_price.department_id
        ORDER BY average_price DESC
      ;`;
  };

  showCommonDepartments = (rowsNumber: number): string => {
    return `
        SELECT 
            id,
            name,
            purchases
            FROM departments
        JOIN 
        (
            SELECT department_id, COUNT(*) AS purchases
            FROM products_orders
            JOIN products ON products.id = products_orders.product_id
            GROUP BY department_id
        ) AS departments_purchases ON departments.id = departments_purchases.department_id
        ORDER BY purchases DESC
        LIMIT ${rowsNumber}
      `;
  };
}

export default DashpoardSql;
