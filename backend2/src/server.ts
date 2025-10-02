import dotenv from 'dotenv'
import app from './app.js';
import connectDB from './db/index.js';


dotenv.config({
  path: './.env'
})

console.log("this is working in server.ts file")
connectDB()


const PORT = process.env.PORT || 3000;

const n: number = 234;
console.log(n);

app.listen(PORT, () => {
  console.log(`the app is listening at port ${PORT}`)
})
