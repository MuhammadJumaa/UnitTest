const googleSearch = require('./script');
 db=[
'cats.com',
'souprecipes.com',
'flowers.com',
'animals.com',
'catpictures.com',
'myfavouritecats.com',
'myfavouritecats2.com'
];
describe('googleSearch',() => {
	it('this is a test',() => {
		expect('hello').toBe('hello');
		googleSearch('testtest' , db);
	})



	it('its searching google',() => {
		expect(googleSearch('testtest' , db)).toEqual([]);
		expect(googleSearch('cat' , db)).toEqual(['cats.com','catpictures.com','myfavouritecats.com']);

	})
	it('work with undefined and null input',()=>{	
		expect(googleSearch(undefined , db)).toEqual([]);
		expect(googleSearch(null , db)).toEqual([]);
	})
	it('dose not return more than 3 matches ',()=>{
		expect(googleSearch('com' , db).length).toEqual(3);
	})
})
