const cron = require( 'node-cron')
const  {runCron}  = require( './scraper.js')

// * Production Cron Schedule
// cron.schedule('0 21-23,0-12 * * THU-FRI', () => {
// 	runCron()
// })

// * Dev Cron Schedule
// cron.schedule('* * * * *', () => {
// 	runCron()
// })

// * Heroku Cron Schedule
cron.schedule('9 * * * *', () => {
	runCron()
})