import { useState } from 'react';
import '../styles/Header.css';
import { BiSearch } from 'react-icons/bi';
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div className='Nav'>
            <div className="child1">
                <h1>Learn<span>Flex</span></h1>
                <div className='ChoiceSearch'>
                    <select name="Courses" id="" className='Courses'>
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
                {isMenuOpen ? <RiCloseFill onClick={handleMenu} className='MenuICon'/> : <RiMenu3Line  onClick={handleMenu} className='MenuICon'/>}
                {
                    isMenuOpen && 
                    <article className='menuList'>
                        <select name="" id="" className='CoursesRepon'>
                            <option value="">Courses</option>
                            <option value="">Software Engineering</option>
                            <option value="">Data Science</option>
                            <option value="">Networking</option>
                        </select>
                        <div className="ListRespon">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                            <aside>
                                <button className='btn1'>Log In</button>
                                <button  className='btn2'>Sign Up</button>
                            </aside>
                        </div>
                    </article>
                }
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
            <div className="ImageContainer" >
                <div className='ImageBg'>
                    <section>
                        <img src="/womanOnPc.png" alt="" />
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
            <div className='Logs'>
                <img src="/google.jpg" alt=""className='img'/>
                <img src="/facebook.png" alt="" className='img'/>
                <img src="/ibm.jpg" alt="" className='img'/>
               <div className='slack'>
                    <img src="/slack.png" alt="" />
                    <h1>slack</h1>
               </div>
                <h1 className='h1'>zoom</h1>
            </div>
        </div>
    )
}