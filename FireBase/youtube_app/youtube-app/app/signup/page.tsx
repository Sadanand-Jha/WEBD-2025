'use client'
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { app } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function page() {

    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((value) => console.log(value));
        } catch (error: any) {
            alert(error)
        }
    }

  return (
    <>
        <div>This is the signup page</div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" style={{backgroundColor: 'yellow', color: 'black'}} onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Enter your email'/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" style={{backgroundColor: 'yellow', color:'black'}} onChange={(e) => setPassword(e.target.value)} value = {password} required placeholder='Enter your password'/>
        <button style={{backgroundColor: 'red', cursor:'pointer', color: 'black', fontWeight:"bold"}} onClick={createUser}>Signup</button>
    </>
  )
}

export default page