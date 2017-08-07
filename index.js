const request = require('request');

class SteamApi {
	constructor(apikey){
		this.apikey = apikey;
		
		/* Methods list */
		this.market = {
			items : this.items
		}
		
		/* Binding class object instead of variable */
		this.market.items = this.market.items.bind(this);
	}
	
	setApikey(apikey){
		this.apikey = apikey;
	}
	
	getApikey(apikey){
		this.apikey = apikey;
	}
	
	/* Get all items by AppID */
	items(appid, callback){
		let apikey = this.apikey;
			
		let url = `https://api.steamapi.io/market/items/${appid}?key=${apikey}`;
		
		console.log(url);
			
		request(url, (e, r, b) => {
			if(e){
				callback(`Error sending request: ${e}`, null);
			} else if(r.statusCode != 200 && r.statusCode != 401){
				callback(`Unsuccessfull request, status code: ${r.statusCode}`, null);
			} else if(r.statusCode == 401){
				callback(`Invalid request parameters`, null);
			} else {
				let result = JSON.parse(b);
				
				callback(null, result);
			}
		});
	}
}

module.exports = SteamApi;