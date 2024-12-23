import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

export default function Footer(){
    return(
        <div className='Footer'>
            <aside>
                <h1 className='footerHanding'>Learn<span>Flek</span></h1>
                <p>&copy; 2023 LearnFlek, India, Inc.</p>
                <p>All Right Reserved</p>
            </aside>
            <FooterLinks Header="Home" link1="Courses" link2="Blog" link3="About Us"/>
            <FooterLinks Header="Tech on LearnFlek" link1="Help and Support" link2="Privacy policy" link3="Sitemap"/>
            <div className='socialMedia'>
                <h1 className='footerHanding'>Follow Us</h1>
                <section className='icons'>
                    <FaInstagram className='mediaIcon'/>
                    <FaTwitter className='mediaIcon'/>
                    <FaFacebook className='mediaIcon'/>
                    <FaYoutube className='mediaIcon'/>
                </section>

            </div>
        </div>
    )
}

function FooterLinks(props){
    return(
        <article>
            <h1 className='footerHanding'>{props.Header}</h1>
            <ul>
                <li><a href="#">{props.link1}</a></li>
                <li><a href="#">{props.link2}</a></li>
                <li><a href="#">{props.link3}</a></li>
            </ul>
        </article>
    )
}