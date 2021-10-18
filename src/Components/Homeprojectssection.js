import Wrappedrow from './Wrappedrow'

export default function Homeprojectsection() {

    const projects = ["Bookandshopp", "Dothiscookingsite", "Muffinscalculator", "Muffinsmastermind", "Odin Battleships", "Sotoarmandoweather" ]


    const squareElement = ({marginh,marginv, _id:text}) => {
        return <div className={`corebox_12 corebox_x14 back_green_o0 half_horizontalmar half_verticalmar mar_t${marginh} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
            {text}
        </div>
    }
    return (<div className="center corebox_20">
        <Wrappedrow item={squareElement} list={projects}  basis={29} marginh={30} marginv={30} className="center" />
    </div>)
}