const actors = [
    {
        name: 'Actor1',
        payment: 1000
    },
    {
        name: 'Actor2',
        payment: 2000
    }
]

for(let actor of actors){
    console.log(actor); 
}

actors.forEach((actor) => {
    console.log(actor.payment);
})