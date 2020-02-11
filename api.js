const favMovies = document.querySelector('form');
const topMovies = document.querySelector('li');
// const tableData = document.querySelector('td')

favMovies.addEventListener('submit', bestMovie);

function bestMovie(event) {
    event.preventDefault();
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(json => favMovie(json))
        .catch(error => console.log(error));


    function favMovie(data) { 
        console.log(data)
        data.forEach(film => {
            
            let titleName = document.createElement('li');
            titleName.innerText = film.title;
            topMovies.appendChild(titleName);
    
            // let filmDate = document.createElement('td');
            // filmDate.innerText = film.release_date;
            // tableData.appendChild (filmDate);
    
    })
}}



