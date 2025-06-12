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

const admins = [1,2,4]

const is_admin = users.map((user) => {
    return admins.includes(user.id)
})

console.log(is_admin);
