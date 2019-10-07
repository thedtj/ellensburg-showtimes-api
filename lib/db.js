const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ dates: [], movies: [], comingSoon: [] }).write()

function updateDB(dbEntry, freshData) {
	const refreshedAt = db.get(`${dbEntry}[0].refreshed`).value()

	db.get(`${dbEntry}`)
		.remove({ refreshed: refreshedAt })
		.value()

	db.get(`${dbEntry}`)
		.push({ freshData, refreshed: Date.now() })
		.write()
}

exports.updateDB = updateDB
