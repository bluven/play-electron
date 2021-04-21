const mysql = require('promise-mysql')
import { Pool } from 'promise-mysql'

let pool: Pool;

export async function initPool() {
  if (pool != null) {
    return
  }

  pool = await mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'cliff',
    connectionLimit: 10,
  })
}

export async function loadTasks(): Promise<any> {
  await initPool()
  return await pool.query('select * from release_task order by id desc limit 10')
}