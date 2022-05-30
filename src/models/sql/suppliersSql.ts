class SuppliersSql {
  index = (): string => {
    return " SELECT * FROM suppliers ;";
  };

  show = (id: number): string => {
    return `SELECT * FROM suppliers WHERE id = ${id} ;`;
  };

  create = (name: string, phone: Number): string => {
    return `
          INSERT INTO suppliers
               (name,phone)
           VALUES
               ('${name}',${phone})
           RETURNING id;
      `;
  };

  edit = (id: Number, name: string, phone: Number): string => {
    return `
        UPDATE suppliers 
        SET name='${name}' , phone=${phone} 
        WHERE id=${id} 
        RETURNING id 
      ;`;
  };

  delete = (id: number): string => {
    return `DELETE FROM suppliers WHERE id = ${id} RETURNING id;`;
  };
}

export default SuppliersSql;
