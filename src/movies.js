// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => {
    const newArr = arr.map((movie) => {
        return movie.director;
    })
    return newArr;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    const newDrama = arr.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });

    return newDrama.length;
}
//howManyMovies();
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if (arr.length === 0) {
        return 0; // return 0 if there is no movie
    }
    const rates = arr.map((movie) => {
        return movie.rate; //return the average 
    })

    const sum = rates.reduce((accumulator, currentValue) => {
        if (currentValue !== undefined) {
            return accumulator + currentValue //return Avg of all the movies' rate
        } else {
            return accumulator; //return Avg even if one movie doesn't have rate
        }
       
      
    })

    return Number((sum/rates.length).toFixed(2)); //return rounded to 2 decimal digits
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter((movie) => {
        return movie.genre.includes('Drama')
    });

    return ratesAverage(dramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (year) => {
    const orderingYear = year.sort((a, b) => {
        return a.length - b.length
    })


    return orderingYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
