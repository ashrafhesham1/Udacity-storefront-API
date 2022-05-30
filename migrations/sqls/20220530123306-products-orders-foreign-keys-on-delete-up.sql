ALTER TABLE products_orders
DROP constraint products_orders_order_id_fkey,
ADD CONSTRAINT products_orders_order_id_fkey
    FOREIGN KEY (order_id)
    REFERENCES orders (id)
    ON DELETE CASCADE;

ALTER TABLE products_orders
DROP constraint products_orders_product_id_fkey	,
ADD CONSTRAINT products_orders_product_id_fkey	
    FOREIGN KEY (product_id)
    REFERENCES products (id)
    ON DELETE CASCADE;