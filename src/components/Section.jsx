import { useRef } from 'react';
import '../styles/Section.css';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Section(){
    const onlineCourses = [
        {
            BgImage: "/blackmanPc.jpg",
            HeaderOne: "UI/Ux Designing",
            HeaderTwo: "Training Course",
            MOdule: "11",
            Rate: "4.7"
        },
        {
            BgImage: "/ladyPc.jpg",
            HeaderOne: "Full Stack",
            HeaderTwo: "Development Course",
            MOdule: "15",
            Rate: "4.5"
        },
        {
            BgImage: "/whitemanPc.jpg",
            HeaderOne: "Digital Marketing &",
            HeaderTwo: "E-Commerce",
            MOdule: "9",
            Rate: "4.3"
        }
    ];
    const Comments = [
        {
            BgImage:"/blackmanPc.jpg",
            Name: "Steve Smith",
            Course:"Associate UI/UX Designer"

        },
        {
            BgImage:"/whitemanPc.jpg",
            Name: "Kautuk Mestri",
            Course:"Full Stack Developer"
        },
        {
            BgImage:"/ladyPc.jpg",
            Name: "Devika Gada",
            Course:"Social Media Strategist"
        }
    ];
    const Blog = [
        {
            BgImage: "/blackmanPc.jpg"
        },
        {
            BgImage: "/whitemanPc.jpg"
        },
        {
            BgImage: "/ladyPc.jpg"
        }
    ]

    return(
        <article>
            <div className="Card1">
                <CardHeading Heading="Our Online Courses"/>
                <div className="CardsHolder" >
                    {
                        onlineCourses.map((courses,id)=>{
                        return <OnlineCoursesCards
                        key={id} 
                            bgImage={courses.BgImage}
                            header1={courses.HeaderOne}
                            header2={courses.HeaderTwo}
                            modules={courses.MOdule}
                            rate={courses.Rate}
                            />
                        })
                    }
                </div>
            </div>
            <section className='Card2Body'>
                <div className="Card2">
                    <CardHeading Heading="What Our Students Say"/>
                    <div className='CardsHolder CommentsCard'>
                        {
                            Comments.map((comments,id) =>{
                                return <StudentsComments key={id}
                                bgImage={comments.BgImage}
                                name={comments.Name}
                                course={comments.Course}
                                />
                            })
                        }
                </div>
            </div>
            </section>
            <div className="Card3">
                <CardHeading Heading="Blogs"/>
                <div className='CardsHolder'>
                    {
                        Blog.map((blog,id) =>{
                            return <BlogsCards key={id}
                            bgImage={blog.BgImage}
                            />
                        })
                    }
                </div>
            </div>
        </article>
    )
}

function CardHeading(props){
    return(
        <div>
            <h2 className='CardsHeading'>{props.Heading}</h2>
        </div>
    )
}
function OnlineCoursesCards(props){
    return(
        <div className='CoursesCard'>
            <div className="UpperDiv" style={{backgroundImage: `url(${props.bgImage})`}}>
                <button>Learn more</button>
            </div>
            <div className="LowerDiv">
                <div className="">
                    <h2>{props.header1}</h2>
                    <h2>{props.header2}</h2>
                </div>
                <div className='modules'>
                    <IoBagHandleOutline />
                    <p>{props.modules} Modules</p>
                </div>
                <div className='rate'>
                    <p>{props.rate}</p>
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                </div>
            </div>
        </div>
    )
}
function StudentsComments(props){
    return(
        <div className="StuComments">
            <div className='profileDetails'>
                <div className="profile" style={{backgroundImage: `url(${props.bgImage})`}}></div>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.course}</p>
                </div>
            </div>
            <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi dolorum quisquam officiis quidem eligendi, dolor reprehenderit ipsa! Illum vero ullam veniam labore, tenetur assumenda."
            </p>
        </div>
    )
}
function BlogsCards(props){
    return(
        <div className='Blogs'>
            <div className="UpperDiv" style={{backgroundImage: `url(${props.bgImage})`}}></div>
            <div className="LowerDiv">
                <section>
                    <p>May,01,2023</p>
                    <p>10 comments</p>
                </section>
                <p>Corem ipsum dolor sit amet,consectetur adipiscing elit</p>
                <p className='readMore'>Read more...</p>
            </div>
        </div>
    )
}