const db = require('../db.json')

// eslint-disable-next-line import/prefer-default-export
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