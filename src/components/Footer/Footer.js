import './Footer.css';
import Instagram from '../../images/ig.png';
import Linkedin from '../../images/linkedin.png';
import Github from '../../images/github.png';

const Footer=()=>{
    return(
        <footer className='social'>
            <div className='social-container'>
                <a href='https://www.instagram.com/tghiglione/' target='_blank'>
                    <img src={Instagram} alt='logo de instagram' className='social-img'/>
                </a>
            </div>
            <div className='social-container'>
                <a href='https://www.linkedin.com/in/tomasghigione/' target='_blank'>
                    <img src={Linkedin} alt='logo de linkedin' className='social-img'/>
                </a>
            </div>
            <div className='social-container'>
                <a href='https://github.com/tghiglione?tab=repositories' target='_blank'>
                    <img src={Github} alt='logo de github' className='social-img'/>
                </a>
            </div>    
        </footer>
    )
};

export default Footer;