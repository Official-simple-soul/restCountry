

fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,flag,region')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let countries = data.map(country => {
            return `<div class="col-md-4 mb-5">
            <div class="card border-0 shadow bg-dark text-light">
                <img src="${country.flag}" alt="" class="image">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text"><b>Capital:</b> ${country.capital}</p>
                    <p class="card-text"><b>Region:</b> ${country.region}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>`;
        }).join('');
        document.querySelector('.row').innerHTML = countries;
    }
    ).catch(error => console.log(error));


    // search for country

  let search = document.querySelector('.search');

  search.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = document.querySelector('.search-input').value;
    fetch(`https://restcountries.com/v2/name/${searchValue}?fields=name,capital,currencies,flag,region`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let countries = data.map(country => {
                return `<div class="col-md-4 mb-5">
                <div class="card border-0 shadow bg-dark text-light">
                    <img src="${country.flag}" alt="" class="image">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text"><b>Capital:</b> ${country.capital}</p>
                        <p class="card-text"><b>Region:</b> ${country.region}</p>
                        <a href="#" class="btn btn-primary view-more" onclick="clickMe()">Read More</a>
                    </div>
                </div>
            </div>`;
            }).join('');
            document.querySelector('.row').innerHTML = countries;
        }
        ).catch(error => console.log(error));
  }
    )
    // search for country

// view more

let viewMore = document.querySelector('.view-more');

function clickMe() {
    alert('You clicked me!');
}
