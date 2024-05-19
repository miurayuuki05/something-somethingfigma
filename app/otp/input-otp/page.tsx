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
                    LUPA<br/> PASS<br/> WORD
                </div>
                <div className="form-section">
                    <div className="login-title">
                        BUAT NGASIH OTPNYA!
                    </div>
                    <form>
                        <input type="text" id="text" name="text" placeholder="Masukan nomor ponsel atau email" required/>
                        <input type="submit" id="lanjutkan" value="Lanjutkan"/>
                    </form>
                </div>
            </div>
        </>
    );
}