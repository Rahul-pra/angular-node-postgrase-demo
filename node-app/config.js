module.exports = {
	port: 5050,
	name: 'product_system',
	dbHost: 'localhost',
	dbUserName: 'postgres',
	dbPassword: 'root',
	dbPort: '5432',
	dbName: 'product_system',
	saltRounds: 2,
	jwtSecret: 'product_system@159*',
	domain: 'http://localhost:5050',
	getServerUrl(req) {
		var serverURL = 'http://localhost:5050/';
		return serverURL;
	}
}