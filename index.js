// import express from 'express'
// import { getHTML, getDates, getShowtimes } from './lib/scraper'
// import './lib/cron'

const express = require('express')
const cors = require('cors')
const db = require('./db.json')
// eslint-disable-next-line no-unused-vars
const cron = require('./lib/cron.js')

const app = express()


app.get('/', (req, res) => {
	res.json(db)
})

const PORT = process.env.PORT || 5800

app.listen(PORT, () => console.log(`app running on port ${PORT}`))

// export default app