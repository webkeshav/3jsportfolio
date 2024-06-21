import { Link } from "react-router-dom"
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText})=>(
    <div className="info-box">
       <p className="font-medium sm:text-xl text-center">{text}</p> 
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)



const renderContent = {
    1:(
        <div>
        <h1 className="sm:text-xl sm:leadin-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Keshav</span> 👋
            <br />
            A software Engineer from India
            <br/>
            <h3>Drag the screen to see all popups.</h3>
            </h1>
            </div>
    ),
    2:(
        <InfoBox 
        text="Worked with MNC's and picked up many skills along the way" 
        link="/about"
        btnText="Learn more"/>
       
    ),
    3:(
        <InfoBox 
        text="developed multiple projects, want to see ?" 
        link="/projects"
        btnText="Visit my portfolio"/>
    ),
    4:(
        <InfoBox 
        text="Need a project done or looking for dev? I'm just a few keystrokes away" 
        link="/contact"
        btnText="Let's talk"/>
    )
}
const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo
