module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/hobs.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/dev/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/test/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
