const register = function (){
    return new Promise((resolve, reject) => {
        console.log('registering ...')  
        setTimeout(() => {
            console.log('registeration completed!');
            resolve();
        }, 2000);
    })
}
const email = function (){
    return new Promise((resolve, reject) => {
        console.log('email_sent')
        setTimeout(() => {
            console.log('email_seen');
            resolve();
        }, 1000);
    })
}
const login = function () {
    return new Promise((resolve, reject) => {
        console.log('loging...')
        setTimeout(() => {
            console.log('logged in Successfully!');
            reject('error came!');
        }, 2000);
    })
}

const userdata = function (
) {
    return new Promise((resolve, reject) => {
        console.log('filling user data');
        setTimeout(() => {
            console.log('user data received successfully!')
            resolve();
        }, 2000);
    })
} 

const display_data = function (){
    console.log('data displayed!');
}

async function Authenticate(){
    try{
        await register();
        await email()
        await login()
        await userdata()
        display_data()
    }
    catch(error){
        console.log('Eror', error)
        throw new error
    }
}

Authenticate()
.then(() => {
    console.log("all set!")
})
.catch(() => {
    console.log(`Error `)
})




console.log("our software works!") 