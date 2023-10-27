const usersModel = {
    getAll: `
        SELECT
            *
        FROM
            users
    `,           //las comillas dobles permiten escribir multilínea
    getByID: `
    SELECT
        *
    FROM
        users
    WHERE
        id = ?       
    `,
    addRow: `
        INSERT INTO
            Users (
                username,
                email,
                password,
                name,
                lastname,
                phome_number,
                role_id,
                id_active
            )
        VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?
        )
    `,
    getByUsername: `
            SELECT
                *
            FROM
                users
            WHERE 
                username = ?
    `,
    getByEmail: `
            SELECT
                id
            FROM
                users
            WHERE 
                email = ?
    `,
    modUser: `
            UPDATE 
                users
            SET
                username = ?,
                email = ?,
                password = ?,
                name = ?,
                lastname = ?,
                phome_number = ?,
                role_id = ?,
                id_active = ?
            WHERE
                id = ?
    `,
    deletedRow: `
            UPDATE
                users
            SET
                id_active = 0
            WHERE
                id = ?
    `
};

module.exports = usersModel;