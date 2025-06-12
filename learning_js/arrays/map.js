const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },
    {
        fname: 'Alice',
        lname: 'Bob'
    }
]

const user = users.map((user) => {
    return `${user.fname} ${user.lname}`
})

console.log(user);