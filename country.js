function checkFeed() {
    let newObject = localStorage.getItem('viewCountry');
    let post = JSON.parse(newObject);
    let items = post[0];

    document.getElementById('name').innerHTML = items.name;
    document.getElementById('flag').src = items.flag;
    document.getElementById('native').innerHTML = 'Native name: ' + " " + items.nativeName;
    document.getElementById('population').innerHTML = 'Population: ' + " " + items.population;
    document.getElementById('region').innerHTML = 'Region: ' + " " + items.region;
    document.getElementById('capital').innerHTML = 'Capital: ' + " " + items.capital;
    document.getElementById('sub').innerHTML = 'Sub-region: ' + " " + items.subregion;
    document.getElementById('currency').innerHTML = 'Currency: ' + " " + items.currencies[0].code;
    if(items.languages.length > 1) {
        document.getElementById('language').innerHTML = 'Language: ' + " " + items.languages[0].name + ', ' + items.languages[1].name
    }
    else if(items.languages.length > 2) {
        document.getElementById('language').innerHTML = 'Language: ' + " " + items.languages[0].name + ', ' + items.languages[1].name + ', ' + items.languages[2].name;
    }
    else {
        document.getElementById('language').innerHTML = 'Language: ' + " " + items.languages[0].name
    }
    
    document.getElementById('domain').innerHTML = 'Top Level Domain: ' + " " + items.topLevelDomain;
    const borderCountry = items.borders

    
    for(let i = 0; i < borderCountry.length; i++) {
        fetch('https://restcountries.com/v2/all?')
        .then(response => response.json())
         .then(data => {
            for (let j = 0; j < data.length; j++) {
                newAlpha = data[j].alpha3Code
                newCodes = data[j].callingCodes[0];
                
                if(newAlpha === borderCountry[i]) {
                    borderFull = data[j].name
                    let input = ''
                    input += `<button class="btn btn-dark shadow borders-in btn-secondary me-2 px-3 py-0" onclick="clickNew(${newCodes})">${borderFull}</button>`
                    document.querySelector('.borders').innerHTML += input
                }
                
            }
            
    })
        
    }
}
checkFeed();

function clickNew(newCodes) {
    fetch(`https://restcountries.com/v2/callingcode/${newCodes}`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("viewCountry", JSON.stringify(data));
        window.location.href = "view.html";
      });
}

