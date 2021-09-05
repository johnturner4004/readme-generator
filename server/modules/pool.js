const { ViewModuleSharp } = require('@material-ui/icons');
const pg = require('pg')
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  
  config = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: 10,
    idleTimeoutMills: 30000,
  };
} else {
  config = {
    host: 'localhost',
    port: 5432,
    database: 'readmemd_generator',
    max: 10,
    idleTimeoutMills: 30000,
  }
};

const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.log(`Unexpected error on idle client: ${err}`);
  process.exit(-1);
});

module.export = pool;