const assert = require('chai').expect;
const data = require('../data/movieCases.js');
const page = require('../page/movie-list.js');

describe.only('OMDB Movie List', () => {
	let apiKey = 'cc99fc43';
	let keySearch = 'lord';
   
	it('@get As a user I can search movie using OMDB API', async() => {
		const response = await page.getMovieList(apiKey, keySearch);
		assert(response.status).to.equal(200);
	}),

	data.arrayNegative.keywordNegative.forEach((element) => {
		it('@get As a user I cannot search movie using keyword ' +element.case, async() => {
			keySearch = element.changing;
			const response = await page.getMovieList(apiKey, keySearch);
			assert(response.status).to.equal(200, response.body.Error);
		});
	});
   
	data.arrayNegative.apiKeyNegative.forEach((element) => {
		it('@get As auser I cannot search movie using ' +element.case, async() => {
			apiKey = element.changing;
			const response = await page.getMovieList(apiKey, keySearch);
			assert(response.status).to.equal(401, response.body.Error);
	      assert(response.body.Response).to.equal('False');
	      // assert(response.body.Error).to.equal('Invalid API key!', response.body.Error);
		});
	});
}); 