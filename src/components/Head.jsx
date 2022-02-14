import Img from '../images/Img.svg'
import '../css/Head.css'
import { Link } from 'react-router-dom'

const Head = () => {
    return (
        <>
            <header>
                <div className="logo-wrapper">
                    <img src={Img} alt="Tatvasoft" />
                </div>
                <div className="nav-wrapper">
                    <div className="nav-link">
                        <Link to="/">Login</Link>|
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="nav-btn">
                        <button><span style={{ color: "#f14d54" }}><i className="fas fa-shopping-cart"></i> 0</span> Cart</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Head