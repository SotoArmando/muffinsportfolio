import { useState } from 'react'
import Homeprojectmodal from './Homeprojectmodal';
import Wrappedrow from './Wrappedrow'

export default function Homeprojectsection() {

    const projects = Object.entries({
        "bookandshopp": ["https://bookandshopp.herokuapp.com/","https://github.com/SotoArmando/bookandshopp", ["React","Ruby on Rails", "SASS", "Responsive", "React & Rails Stack"]],        
        "dothiscooking":["https://dothiscookingsite.herokuapp.com/", "https://github.com/SotoArmando/cookingreactcapstoned", ["React", "SASS", "Responsive", "Rapidapi"]],
        "weatherapp": ["https://sotoarmandoweather.herokuapp.com/","https://github.com/SotoArmando/odin-weather", ["React", "SASS", "Responsive", "Google API"]],
        "muffinsmastermind": ["https://muffinsmastermind.herokuapp.com/","https://github.com/SotoArmando/muffinsmastermind", ["React", "SASS", "Responsive", "Interactive App"]], 
        "battleships": ["https://sotoarmando.github.io/odin-battleships/dist/index.html","https://github.com/SotoArmando/odin-battleships", ["React", "SASS", "Responsive", "Interactive App"]],
    })

    const [active,setModalActive] = useState(false);
    const [pictures, setPicturesprev] = useState('dothiscooking')
    const [urls, setProjecturls] = useState(projects[1][1])


    const squareElement = ({marginh,marginv, _id:[text, urls]}) => {
        return <div onClick={() => {setModalActive(true);setPicturesprev(text);setProjecturls(urls)} } className={`hover corebox_14 relative corebox_x14  half_horizontalmar half_verticalmar mar_t${marginv} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
            <div className={`allsize absolute left top cover back_2 center`}>
                <div className={`transparent pic_mashup${text} contain corebox_12 `}/>
            </div>
            {text}
            <div className="to_hover absolute left top allsize  btn col end items_end">
                <span className="corebox_4 corebox_x9 center back_blue_o0 fore_9 ffam_karla ls_28 f600 f_1">See project</span>
            </div>
            <div className="absolute left top corebox_3 corebox_x10 back_2 row items_center pad_l27 capitalize ffam_karla f_2 f600 ">
                {text}
            </div>
        </div>
    }

    return (<div className="center corebox_20 col ">
        <Homeprojectmodal active={active} setModalActive={setModalActive} picturesprev={pictures} urls={urls} />
        <span className="tcenter corebox_5 row items_center center f_4 ffam_karla f700 ls_29 ">My Best works</span>
        <Wrappedrow item={squareElement} list={projects}  basis={47} marginh={22} marginv={22} g="" className="center" />
    </div>)
}