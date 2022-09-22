function checkFeed() {
    let newObject = localStorage.getItem('viewCountry')
    console.log(newObject);
    let post = JSON.parse(newObject)
    console.log(post)

    document.getElementById('name').innerHTML = post.name
    document.getElementById('native').innerHTML = post.native
    document.getElementById('population').innerHTML = post.population
}

checkFeed();