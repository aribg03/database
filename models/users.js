const usersModel = {
    getAll: `
        SELECT
            name, lastname
        FROM
            users
    `,           //las comillas dobles permiten escribir multilínea
};

module.exports = usersModel;