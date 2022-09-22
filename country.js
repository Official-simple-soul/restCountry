function checkFeed() {
    let newObject = localStorage.getItem('viewCountry');
    let post = JSON.parse(newObject);
    console.log(post)
    let items = post[0];

    document.getElementById('name').innerHTML = items.name;
    document.getElementById('flag').src = items.flag;
    document.getElementById('native').innerHTML = 'Native name: ' + " " + items.nativeName;
    document.getElementById('population').innerHTML = 'Population: ' + " " + items.population;
    document.getElementById('region').innerHTML = 'Region: ' + " " + items.region;
    document.getElementById('capital').innerHTML = 'Capital: ' + " " + items.capital;
    document.getElementById('sub').innerHTML = 'Sub-region: ' + " " + items.subregion;
    document.getElementById('currency').innerHTML = 'Currency: ' + " " + items.currencies[0].code;
    document.getElementById('language').innerHTML = 'Language: ' + " " + items.languages[0].name
    document.getElementById('domain').innerHTML = 'Top Level Domain: ' + " " + items.topLevelDomain;
}
checkFeed();


