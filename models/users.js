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
        id = ?`
};

module.exports = usersModel;