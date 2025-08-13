'use client'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
function page() {

    const auth = getAuth(app)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignInUser = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then((value) => alert(value)).catch((error) => alert(error));
        } catch (error) {
            alert(error);
        }
    }

    return (
    <>
        <div>This is the signin page</div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" style={{backgroundColor: 'greenyellow', color: 'black'}} required value = {email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' style={{backgroundColor: 'greenyellow', color: 'black'}} required value = {password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick = {SignInUser} style={{backgroundColor: 'red'}}>singIn</button>
    </>
  )
}

export default page