import Image from 'next/image';

export default function Login() {
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
                        <input type="text" id="email" name="email" placeholder="Masukan nomor ponsel atau email" required/>
                        <input type="submit" id="lanjutkan" value="Lanjutkan"/>
                    </form>
                    <div className="atau-line">
                        atau
                    </div>
                    <div>
                        <button className="google-btn"><Image alt='google' src="/img/google.png" height={25} width={25}></Image>Masuk dengan Google</button>
                        <button className="apple-btn"><Image alt='apple' src="/img/apple.png" height={25} width={25}></Image> Masuk dengan Apple</button>
                    </div>
                    <div>
                        <p className='text-agree'>Dengan melanjutkan, berarti anda setuju dengan syarat dan ketentuan ketentuan yang berlaku.</p>
                    </div>
                </div>
            </div>
        </>
    );
}