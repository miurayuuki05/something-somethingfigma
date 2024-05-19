"use client"
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { FaCheckSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

export default function Register() {
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isPasswordLong, setIsPasswordLong] = useState(false)
    const [isLowerCase, setIsLowerCase] = useState(false)
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [nomor, setNomor] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handlePassword = (e : any) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        var i=0;
        var character : any ='';
        while (i <= password.length){
            character = password.charAt(i);
            if (!isNaN(character * 1)){
                setIsNumber(true)
            }else{
                if (character == character.toUpperCase()) {
                    setIsUpperCase(true)
                }
                if (character == character.toLowerCase()){
                    setIsLowerCase(true)
                }
            }
            i++;
        }
        console.log(isLowerCase, isUpperCase, isNumber)
        if (isLowerCase && isUpperCase && isNumber) {
            setIsPasswordValid(true)   
        } else {
            setIsPasswordValid(false)
        }
    })

    return (
        <>
            <div className="form-bg">
                <div className="form-navbar">
                    Washup
                </div>
                <div className="form-section-text-bg">
                    DAFTAR<br/> DULU<br/> KUY!
                </div>
                <div className="form-section">
                    <div className="login-title">
                        DAFTAR DULU KUY!
                    </div>
                    <form>
                        <input className='mb-25' type="text" id="nama" name="nama" placeholder="Masukan nama" required/>
                        <input className='mb-25' type="email" id="email" name="email" placeholder="Masukan email" required/>
                        <input className='mb-25' type="text" id="nomor" name="nomor" placeholder="Masukan nomor ponsel" required/>
                        <input onChange={handlePassword} onFocus={handleFocus} onBlur={handleBlur} className='mb-25' type="password" id="password" name="password" placeholder="Masukan password" value={password} required/>
                        {isFocused && 
                            <div className='mb-25'>
                                <div className='flex'>
                                    {isPasswordValid ? <FaCheckSquare className='fill-green' /> : <FaMinusSquare className='fill-red' />}
                                    <p className='white-text-1'>A combination of uppercase letters, lowercase letters, numbers, and symbols.</p>
                                </div>
                                <div className='flex'>
                                    {isPasswordLong ? <FaCheckSquare className='fill-green' /> : <FaMinusSquare className='fill-red' />}
                                    <p className='white-text-1'>At least 12 characters long but 14 or more is better.</p>
                                </div>
                            </div>
                        }
                        <input className='mb-25' type="password" id="confirm-password" name="password" placeholder="Konfirmasi password" required/>
                        <input className='mb-25' type="submit" id="lanjutkan" value="Daftar"/>
                    </form>                    
                    <div>
                        <a className='text-agree'>Dengan melanjutkan, berarti anda setuju dengan syarat dan ketentuan ketentuan yang berlaku.</a>
                    </div>
                </div>
            </div>
        </>
    );
}