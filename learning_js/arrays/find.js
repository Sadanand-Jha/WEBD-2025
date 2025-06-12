const users = [
    {
        name: '1',
        id: 1
    },
    {
        name: '2',
        id: 2
    },
    {
        name: '3',
        id: 3
    }
]

const user = users.find((user) => {
    return user.id === 3
})

console.log(user)