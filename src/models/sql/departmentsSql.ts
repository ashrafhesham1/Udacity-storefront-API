class DepartmentsSql {
  index = (): string => {
    return " SELECT * FROM departments ;";
  };

  show = (id: number): string => {
    return `SELECT * FROM departments WHERE id = ${id} ;`;
  };

  create = (name: string): string => {
    return `
            INSERT INTO departments
                 (name)
             VALUES
                 ('${name}')
             RETURNING id;
        `;
  };

  edit = (id: Number, name: string): string => {
    return `
          UPDATE departments 
          SET name='${name}'  
          WHERE id=${id} 
          RETURNING id 
        ;`;
  };

  delete = (id: number): string => {
    return `DELETE FROM departments WHERE id = ${id} RETURNING id;`;
  };
}

export default DepartmentsSql;
