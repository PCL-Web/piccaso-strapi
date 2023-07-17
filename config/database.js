module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    version: 'Dev',
    connection: {
      url: env('DATABASE_URL'),
      host: env('PGHOST'),
      port: env.int('PGPORT'),
      database: env('PGDATABASE'),
      user: env('PGUSER'),
      password: env('PGPASSWORD'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
