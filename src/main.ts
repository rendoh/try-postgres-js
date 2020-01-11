import { promises as fs } from 'fs'
import path from 'path'
import postgres from 'postgres'
import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json([])
})

app.post('/users', (req, res) => {
  res.json({})
})

app.get('/', async (req, res) => {
  const file = await fs.readFile(
    path.resolve(__dirname, './views/index.html'),
    'utf-8',
  )
  res.send(file)
})

app.listen(3000, () => {
  console.log('App ready.')
})
