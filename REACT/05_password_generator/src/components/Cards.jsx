import { useState, useCallback, useEffect } from 'react'
import React from 'react'

export default function Cards() {
    const [length, setlength] = useState(5);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [symbolsAllowed, setsymbolsAllowed] = useState(false);
    const [password, setpassword] = useState('')

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
        if(numberAllowed) str += '1234567890'
        if(symbolsAllowed) str += '!@#$%^&*()_+=-'

        for(let i = 0; i < length; i++){
            let num = Math.floor(Math.random() * (str.length - 1));
            pass += str[num];
        }
        
        setpassword(pass);
    }, [numberAllowed, symbolsAllowed, length])

    useEffect(()=>{
        generatePassword();
    }, [length, numberAllowed, symbolsAllowed])

    const copyPassword = () => {
        window.navigator.clipboard.writeText(password);
    }

   return (
    <div className="container" style={{
    backgroundColor: "#FF9F00",
     height: "250px",
      width: "500px",
       display: 'flex',
       flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
         padding: '20px'}}>
        <div className="name text-3xl font-bold">Password Generator</div>
        <div className='bottom_div'>
            <div className="bottom" style={{
                display: 'flex',
                justifyContent: 'space-evenly' 
            }}>
                <input type="text" 
                    readOnly
                    placeholder='Password'
                    name='input'
                    className='rounded-sm'
                    value={password}
                    style={{
                        backgroundColor: 'white',
                        width: "300px",
                        paddingLeft: '10px'
                    }}
                />
                <label htmlFor="name">
                    <button className = 'rounded-xl' 
                    onClick={copyPassword}
                    style={{
                        width: '100px',
                        backgroundColor:'#CB0404',
                        color:'white',
                        cursor:'pointer',
                        fontWeight: '500',
                        marginLeft: '20px',
                        paddingBottom: '5px'
                    }}>Copy</button>
                </label>
            </div>
            <div className="bottom_last mt-3">
                <input type="range" name="length" 
                    max={20}
                    min={5}
                    value={length}
                    className='cursor-pointer'
                    onChange={(event) => setlength(event.target.value)}
                />
                <label htmlFor="length" className='ml-4'
                    style={{
                        color:'black'
                    }}
                >Length:{length}</label>
                <input type="checkbox" id="numbers" className='ml-5'
                    defaultValue={numberAllowed}
                    onChange={() =>
                        setnumberAllowed((prev) => !prev)
                    }
                />
                <label htmlFor="numbers">Numbers</label>
                <input type="checkbox" id="symbols" className='ml-5'
                    defaultValue={symbolsAllowed}
                    onChange={() =>
                        setsymbolsAllowed((prev) => !prev)
                    }
                />
                <label htmlFor="symbols">Symbols</label>
            </div>
        </div>
    </div>
  )
}
