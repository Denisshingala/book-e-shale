import img_path from '../images/Img.svg'
import '../css/footer.css'

const Footer = ()=>{
    return(
        <>
            <footer>
                <img src={img_path} alt="Tatvasoft" />
                <p>
                    &copy; {new Date().getFullYear()} Tatvasoft.com. All rights reserved
                </p>
            </footer>
        </>
    )
}

export default Footer