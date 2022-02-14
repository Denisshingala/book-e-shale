import { Link } from 'react-router-dom';
import '../css/body.css'

const Body = () => {
    return (
        <>
            <div className="body-container">
                <div className="path">Home &gt; <span className='current-path'>Login</span> </div>
                <div className="title text-center">Login or Create an Account</div>
                <div className="body-wrapper">
                    <div className="register-container">
                        <p className='left-title m-0'>New Customer</p>
                        <hr />
                        <p style={{ fontSize: "15px", color: "#838383", fontWeight: "300", marginBottom: "20px" }}>Registration is free and easy</p>
                        <ul>
                            <li>Faster checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track order and more</li>
                        </ul>
                        <Link to="/register">
                            <button className="register-button">Create an Account</button>
                        </Link>
                    </div>
                    <div className="login-container">
                        <p className='right-title m-0'>Registered Customers</p>
                        <hr />
                        <p style={{ fontSize: "15px", color: "#838383", fontWeight: "300", marginBottom: "20px" }}>If you have an account with us, please log in.</p>
                        <form>
                            <div className='input'>
                                <label htmlFor="email">Email address</label><br />
                                <input type="email" className="form-input" name="email" />
                            </div>
                            <div className='input'>
                                <label htmlFor="password">Password</label><br />
                                <input type="password" className="form-input" name="password" />
                            </div>
                            <button type="submit" className="login-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body