// import express from 'express'
// import { getHTML, getDates, getShowtimes } from './lib/scraper'
// import './lib/cron'

const express = require('express')
const getHTML = require('./lib/scraper.js')
const getDates = require('./lib/scraper.js')
const getShowtimes = require('./lib/scraper.js')
const cron = require('./lib/cron.js')

const app = express()

// eslint-disable-next-line no-unused-vars
app.get('/', async (req, res) => {

	const showtimesHTML = await getHTML(
		'http://ellensburgmovies.com/gmc_html/gmc_html_showtimes.html'
	)

	const [dates, { movies, comingSoon }] = await Promise.all([
		getDates(showtimesHTML),
		getShowtimes(showtimesHTML)
	])

	res.json({ dates, movies, comingSoon })
})

const PORT = process.eventNames.PORT || 5800

app.listen(PORT, () => console.log(`app running on port ${PORT}`))

// export default app