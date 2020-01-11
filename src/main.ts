import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json([])
})

app.post('/users', (req, res) => {
  res.json({})
})

app.listen(3000, () => {
  console.log('App ready.')
})
