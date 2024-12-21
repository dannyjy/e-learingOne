import '../styles/Section.css';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Section(){
    const onlineCourses = [
        {
            BgImage: "src/assets/blackmanPc.jpg",
            HeaderOne: "UI/Ux Designing",
            HeaderTwo: "Training Course",
            MOdule: "11",
            Rate: "4.7"
        },
        {
            BgImage: "src/assets/ladyPc.jpg",
            HeaderOne: "Full Stack",
            HeaderTwo: "Development Course",
            MOdule: "15",
            Rate: "4.5"
        },
        {
            BgImage: "src/assets/whitemanPc.jpg",
            HeaderOne: "Digital Marketing &",
            HeaderTwo: "E-Commerce",
            MOdule: "9",
            Rate: "4.3"
        }
    ];
    const Comments = [
        {
            BgImage:"src/assets/blackmanPc.jpg",
            Name: "Steve Smith",
            Course:"Associate UI/UX Designer"

        },
        {
            BgImage:"src/assets/whitemanPc.jpg",
            Name: "Kautuk Mestri",
            Course:"Full Stack Developer"
        },
        {
            BgImage:"src/assets/ladyPc.jpg",
            Name: "Devika Gada",
            Course:"Social Media Strategist"
        }
    ];
    const Blog = [
        {
            BgImage: "src/assets/blackmanPc.jpg"
        },
        {
            BgImage: "src/assets/whitemanPc.jpg"
        },
        {
            BgImage: "src/assets/ladyPc.jpg"
        }
    ]
    return(
        <article>
            <div className="Card1">
                <CardHeading Heading="Our Online Courses"/>
                <div className="OnlineCardS">
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
            <div className="Card2">
                <CardHeading Heading="What Our Students Say"/>
                <div className='CommentsCards'>
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
            <div className="">
                <CardHeading Heading="Blogs"/>
                <div className='CommentsCards'>
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
            <div>
                <div className="" style={{backgroundImage: `url(${props.bgImage})`}}></div>
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
            <div className="" style={{backgroundImage: `url(${props.bgImage})`}}></div>
            <div className="">
                <section>
                    <p>May,01,2023</p>
                    <p>10 comments</p>
                </section>
                <p>Corem ipsum dolor sit amet,consectetur adipiscing elit</p>
                <p>Read more...</p>
            </div>
        </div>
    )
}