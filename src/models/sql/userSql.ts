class UsersSql {
  index = (): string => {
    return " SELECT * FROM users ;";
  };

  show = (id: number): string => {
    return `
      SELECT 
        id,
        first_name,
        last_name
      FROM USERS WHERE id=${id} 
    ;`;
  };

  create = (firstName: string, lastName: string, password: string): string => {
    return `
        INSERT INTO users 
            (first_name, last_name, password) 
        VALUES 
            ('${firstName}','${lastName}','${password}')
        RETURNING id;
      `;
  };

  editName = (firstName: string, lastName: string, id: number): string => {
    return `
        UPDATE users 
        SET 
            first_name='${firstName}',
            last_name='${lastName}'
        WHERE id=${id} 
        Returning id;
      `;
  };

  delete = (id: number): string => {
    return `DELETE FROM users WHERE id = ${id} Returning id ;`;
  };
}

export default UsersSql;
