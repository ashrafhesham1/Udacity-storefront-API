CREATE TABLE orders(
 id SERIAL PRIMARY KEY,
 user_id INTEGER,
 active BOOLEAN,
 FOREIGN KEY (user_id) REFERENCES users(id)
);