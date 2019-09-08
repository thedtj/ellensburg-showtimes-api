import express from 'express'
import { getHTML, getDates, getShowtimes } from './lib/scraper'
import './lib/cron'

const app = express()

// eslint-disable-next-line no-unused-vars
app.get('/api', async (req, res, next) => {

	const showtimesHTML = await getHTML(
		'http://ellensburgmovies.com/gmc_html/gmc_html_showtimes.html'
	)

	const [dates, { movies, comingSoon }] = await Promise.all([
		getDates(showtimesHTML),
		getShowtimes(showtimesHTML)
	])

	res.json({ dates, movies, comingSoon })
})

const port = process.eventNames.PORT || 5800

app.listen(port, () => console.log(`app running on port ${port}`))

export default app