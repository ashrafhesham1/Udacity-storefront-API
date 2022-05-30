class ProductsSql {
  index = (): string => {
    return " SELECT * FROM products ;";
  };

  show = (id: number): string => {
    return `SELECT * FROM products WHERE id=${id} ;`;
  };

  create = (
    name: string,
    price: Number,
    supplierId: number,
    departmentId: number
  ): string => {
    return `
        INSERT INTO products
             (name,price,supplier_id,department_id)
         VALUES
             ('${name}',${price},${supplierId},${departmentId})
         RETURNING id;
    `;
  };

  edit = (id: Number, newName: string = "", newPrice: Number = 0): string => {
    return `UPDATE products SET name='${newName}' , price=${newPrice} WHERE id=${id} RETURNING id ;`;
  };

  delete = (id: number): string => {
    return `DELETE FROM products WHERE id = ${id} RETURNING id;`;
  };
}

export default ProductsSql;
