const steamapi = require('./index.js');

let apikey = 'YOUR_API_KEY';

let api = new steamapi(apikey);

api.market.items(730, (err, result) => {
	console.log(err);
	console.log(result);
});