const register = function (callback){
    console.log('registering ...')  
    setTimeout(() => {
        console.log('registeration completed!');
        callback();
    }, 2000);
}
const email = function (callback){
    console.log('email_sent')
    setTimeout(() => {
        console.log('email_seen');
        callback();
    }, 1000);
}
const login = function (callback) {
    console.log('loging...')
    setTimeout(() => {
        console.log('logged in Successfully!');
        callback();
    }, 2000);
}

const userdata = function (callback) {
    console.log('filling user data');
    setTimeout(() => {
        console.log('user data received successfully!')
        callback();
    }, 2000);
} 

const display_data = function (){
    console.log('data displayed!');
}


register(function (){
    email(function (){
        login(function (){
            userdata(function (){
                display_data()
            })
        })
    })
})


console.log("our software works!")