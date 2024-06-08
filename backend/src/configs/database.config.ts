import { Pool } from 'pg';

const pool = new Pool({
    user: 'db_hamburgesas',
    host: 'dpg-cpfsuool5elc738j0rr0-a.oregon-postgres.render.com',
    database: 'db_hamburgesas',
    password: 'HrpC2qq6RoAmJkTU9gxBR15D3QwYTcXw',
    port: parseInt('5432'),
    ssl: {
        rejectUnauthorized: false  // Importante en entornos de desarrollo con SSL autofirmado, ajustar para producción
    }
});

export default pool;



