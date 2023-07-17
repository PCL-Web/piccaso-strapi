module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      url: env('DATABASE_URL','postgresql://postgres:ONLlSaSsmhdCL704fpzG@containers-us-west-4.railway.app:6008/railway'),
host: env('PGHOST', 'containers-us-west-4.railway.app'),
port: env.int('PGPORT', 6008),
database: env('PGDATABASE', 'railway'),
user: env('PGUSER', 'postgres'),
password: env('PGPASSWORD', 'ONLlSaSsmhdCL704fpzG'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
