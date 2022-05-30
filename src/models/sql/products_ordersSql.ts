class ProductsOrdersSql {
  create = (orderId: number, productId: number, quantity: Number): string => {
    return `
        INSERT INTO products_orders
             (order_id,product_id,quantity) 
        VALUES 
             (${orderId},${productId},${quantity}) 
        RETURNING order_id,product_id
      ;`;
  };

  edit = (orderId: number, productId: number, quantity: number): string => {
    return `
        UPDATE 
            products_orders 
        SET 
            quantity=${quantity} 
        WHERE 
            order_id=${orderId} AND product_id=${productId}
        RETURNING order_id,product_id
      ;`;
  };

  delete = (orderId: number, productId: number): string => {
    return `
        DELETE FROM products_orders
        WHERE order_id = ${orderId} and product_id = ${productId} 
        RETURNING order_id,product_id
      ;`;
  };
}

export default ProductsOrdersSql;
