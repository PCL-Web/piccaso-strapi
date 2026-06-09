module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  return {
    connection: {
      client: 'postgres',
      connection: databaseUrl
        ? {
            connectionString: databaseUrl,
            ssl: env.bool('DATABASE_SSL', false) && {
              rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
            },
          }
        : {
            host: env('PGHOST', '127.0.0.1'),
            port: env.int('PGPORT', 5432),
            database: env('PGDATABASE', 'strapi'),
            user: env('PGUSER', 'strapi'),
            password: env('PGPASSWORD', 'strapi'),
            ssl: env.bool('DATABASE_SSL', false),
          },
      pool: { min: 0 },
    },
  };
};