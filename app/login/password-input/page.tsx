import Image from 'next/image';
import React from 'react';

export default function Loginpassword() {
    return (
        <>
            <div className="form-bg">
                <div className="form-navbar">
                    Washup
                </div>
                <div className="form-section-text-bg">
                    MASUK<br/> DULU<br/> KUY!
                </div>
                <div className="form-section">
                    <div className="login-title">
                        LOG IN DULU KUY !
                    </div>
                    <form>
                        <input type="password" id="password" name="password" placeholder="Masukan password" required/>
                        <input type="submit" id="lanjutkan" value="Lanjutkan"/>
                    </form>
                    <div> 
                        <p className='text-forgot'>Lupa Password?</p>
                    </div>
                </div>
            </div>
        </>
    );
}