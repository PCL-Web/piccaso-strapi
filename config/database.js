module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      url: env('DATABASE_URL','postgresql://postgres:d8XFJUnCTeaGdomQFXIk@containers-us-west-91.railway.app:7871/railway'),
      host: env('PGHOST', 'containers-us-west-91.railway.app'),
      port: env.int('PGPORT', 7871),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'd8XFJUnCTeaGdomQFXIk'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});



