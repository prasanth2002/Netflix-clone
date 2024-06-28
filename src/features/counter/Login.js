import React from 'react'
import './Login.css'
function Login() {
    return (
        <div>
            <img className='bg' src='Image/bg.jpg' />
            <div className='container'>



                <div className='card'>
                    <div>
                        <h2 className='head'>Sign In</h2>
                    </div>
                    <div className='textbox'>
                        <input type="text" autofocus="autofocus" placeholder='Enter Your Name' />
                    </div>
                    <div className='textbox'>
                        <input type="password" autofocus="autofocus" placeholder='Enter Your password' />
                    </div>
                    <div className='btn'>
                        <button className='btn1'>Sign In</button>
                    </div>
                    <div className='rem'>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" /> Remeber me
                        <p className='need'> Need help ?</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login