import { Pool } from 'pg';

const pool = new Pool({

    user: 'hamburbd',
    host: 'dpg-cpi8shuct0pc73fof380-a.oregon-postgres.render.com',
    database: 'hamburbd',
    password: 'FuhfB2MBCLwDVlABkfIcoDe7IIETOwC1',
    port: parseInt('5432'),
    ssl: {
        rejectUnauthorized: false  // Importante en entornos de desarrollo con SSL autofirmado, ajustar para producción
    }

});

export default pool;



