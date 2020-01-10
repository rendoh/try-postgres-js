import postgres from 'postgres'
import { POSTGRES } from './environments'

const sql = postgres(POSTGRES)
;(async () => {
  try {
    await sql`
      CREATE TABLE users (
        id SERIAL NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP,
        PRIMARY KEY (id)
      )
    `
  } catch (error) {
    console.error('セットアップに失敗しました')
    console.log(error)
  } finally {
    sql.end()
  }
})()
