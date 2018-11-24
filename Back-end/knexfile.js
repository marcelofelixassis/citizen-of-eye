module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'marcelo',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }
};