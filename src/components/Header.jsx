import '../styles/Header.css';
import { BiSearch } from 'react-icons/bi';
import { FaSlack } from "react-icons/fa";

export default function Header(){
    return(
        <div>
            <Nav/>
            <Main/>
            <HeaderBase/>
        </div>
    )
}

function Nav(){
    return(
        <div className='Nav'>
            <div className="child1">
                <h1>Learn<span>Flex</span></h1>
                <div className='ChoiceSearch'>
                    <select name="Courses" id="">
                        <option value="">Courses</option>
                        <option value="">Software Engineering</option>
                        <option value="">Data Science</option>
                        <option value="">Networking</option>
                    </select>
                    <div >
                        <input type="text" placeholder='Search'/>
                        <BiSearch className='searchIcon'/>
                    </div>
                </div>
            </div>
            <div className="child2">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <button className='btn1'>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
function Main(){
    return(
        <div className='main'>
            <div className="TextContainer">
                <section>
                    <h1>Unlock Your</h1>
                    <h1>Potential with</h1>
                    <h1>Online Training</h1>
                </section>
                <p>
                    Upgrade your skills and achieve your goals with
                    expert instructors and flexible learning options
                </p>
                <button>Export Our Courses</button>
            </div>
            <div className="ImageContainer">
                <div className='ImageBg'>
                    <section>
                        <img src="src/assets/womanOnPc.png" alt="" />
                    </section>
                </div>
            </div>
        </div>
    )
}
function HeaderBase(){
    return(
        <div className='Base'>
            <h2>We collaborate with <span>20+ leading companies</span></h2>
            <div>
                <h1>G<span>o</span><span>o</span>g<span>l</span><span>e</span></h1>
                <h1>facebook</h1>
                <h1>IBM</h1>
                <h1><FaSlack/> slack</h1>
                <h1>zoom</h1>
            </div>
        </div>
    )
}