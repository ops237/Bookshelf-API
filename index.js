import express from 'express'
const app = express()

import booksRouter from './route/books.js'
app.use(express.json());
app.use('/', booksRouter)

app.listen(443, () => {
    console.log('Listening on port 443')
})