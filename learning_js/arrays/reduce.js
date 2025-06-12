const movies = [
    {
        name: '1',
        budget: 100
    },
    {
        name: '2',
        budget: 200 
    }
]

const total = movies.reduce((acc, movie) => {
    acc += movie.budget
    return acc;
}, 0)


console.log(total)