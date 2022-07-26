let changeBtn = document.querySelector('.changebtn');
let changeBody = document.querySelector('.body')

    changeBtn.addEventListener('click', function () {
        changeBody.classList.toggle('change');

        if (changeBody.classList.contains('change')) {
            changeBtn.innerHTML = 'Dark Mode';
            changeBtn.style.border = '1px solid #fff';
        }
        else {
            changeBtn.innerHTML = 'Light Mode';
        }
    }
    );

fetch('https://restcountries.com/v2/all?')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let countries = data.map(country => {
            return `<div class="col-md-4 mb-5">
            <div class="card border-0 shadow bg-transparent">
                <img src="${country.flag}" alt="" class="image">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text"><b>Capital:</b> ${country.capital}</p>
                    <p class="card-text"><b>Region:</b> ${country.region}</p>
                    <a href="#" class="btn btn-primary view-more" onclick="clickMe(${country.name})">Read More</a>
                </div>
            </div>
        </div>`;
        }).join('');
        document.querySelector('.row').innerHTML = countries;
    }
    ).catch(error => console.log(error));


//     // search for country

  let search = document.querySelector('.search');

  search.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = document.querySelector('.search-input').value;
    fetch(`https://restcountries.com/v2/name/${searchValue}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let countries = data.map(country => {
                return `<div class="col-md-4 mb-5">
                <div class="card border-0 shadow">
                    <img src="${country.flag}" alt="" class="image">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text"><b>Capital:</b> ${country.capital}</p>
                        <p class="card-text"><b>Population:</b> ${country.population}</p>
                        <p class="card-text"><b>Region:</b> ${country.region}</p>
                        <a href="#" class="btn btn-primary view-more" onclick="clickMe(${country.name})">Read More</a>
                    </div>
                </div>
            </div>`;
            }).join('');
            document.querySelector('.row').innerHTML = countries;
        }
        ).catch(error => console.log(error));
  }
    )

// reload page
let home = document.querySelector('.home');
home.addEventListener('click', () => {
    location.reload();
}
)

// filter by region
let africa = document.querySelectorAll('.region');

for (let i = 0; i < africa.length; i++) {
    africa[i].addEventListener('click', (e) => {
        e.preventDefault();
        let region = e.target.innerText;
        fetch(`https://restcountries.com/v2/region/${region}`)
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
                            <p class="card-text"><b>Population:</b> ${country.population}</p>
                            <p class="card-text"><b>Region:</b> ${country.region}</p>
                            <a href="#" class="btn btn-primary view-more" onclick="clickMe(${country.name})">Read More</a>
                        </div>
                    </div>
                </div>`;
                }).join('');
                document.querySelector('.row').innerHTML = countries;
            }
            ).catch(error => console.log(error));
    }

    )
}


// click to see more about country details on a new html page

function clickMe(name) {
    fetch(`https://restcountries.com/v2/all/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("viewCountry", JSON.stringify(data));
        window.location.href = "view.html";
        // console.log(data)
      });
  }





// async function getCountries() {
//     let response = await fetch('https://restcountries.com/v2/all');
//     let data = await response.json();
//     let countries = data.map(country => {
//         return `<div class="col-md-4 mb-5">
//         <div class="card border-0 shadow bg-transparent">
//             <img src="${country.flag}" alt="" class="image">
//             <div class="card-body">
//                 <h5 class="card-title">${country.name}</h5>
//                 <p class="card-text"><b>Capital:</b> ${country.capital}</p>
//                 <p class="card-text"><b>Region:</b> ${country.region}</p>
//                 <a href="#" class="btn btn-primary view-more" onclick="clickMe(${country.name})">Read More</a>
//             </div>
//         </div>
//     </div>`;
//     }).join('');
//     document.querySelector('.row').innerHTML = countries;
// }
// getCountries();

// // search for country

// let search = document.querySelector('.search');
