'use client'
import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'


const db = getDatabase(app);

function Page() {

  const putData = async () => {
      try {
        await set(ref(db, 'users/sadanand'), {
        id: 1,
        name: 'Sadanand'
        })
        console.log("data saved successfully!")
      } catch (error) {
        console.log('error occured!');
      }
  }

  return (
    <>
      <div className='bg-amber-300 text-black font-bold text-center text-2xl'>This is the Profile Page!</div>
      <button onClick={putData} style={{cursor:'pointer'}}>Put data</button>
    </>
  )
}

export default Page