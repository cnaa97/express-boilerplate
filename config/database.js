

module.exports = {
    development: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        database: "nodejs",
        host: process.env.DB_HOST_DEV,
        dialect: "mysql",
        operatorsAliases: 0
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "nodejs",
        host: process.env.DB_HOST,
        dialect: "mysql",
        operatorsAliases: 0
    }
}