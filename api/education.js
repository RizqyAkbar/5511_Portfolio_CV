import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error mengambil data education:', error);
    res.status(500).json({ error: "Gagal mengambil data pendidikan" });
  }
}