import Wrappedrow from './Wrappedrow'

export default function Homelanding() {
    const squareElementB = ({marginh,marginv}) => {
        return <div className={`bidcorebox_17 border_0 half_horizontalmar half_verticalmar mar_t${marginh} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
        </div>
    }
    const squareElement = ({marginh,marginv,_id:pic}) => {
        return <div className={`bidcorebox_11 half_horizontalmar half_verticalmar cover pic_${pic} mar_t${marginh} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
        </div>
    }

    const hometext = {
        "Pretty code by ingenious person": "f_7 f700  ffam_karla maxedcorebox_x17 maxedcorebox_9",
        "Hello I'm a software developer! I specialize in building responsive websites for portfolios, dashboards, and unconventional sites. Love to code my customized widgets and create my own dependencies that solve practice issues, centralizing security issues, and decentralizing a high level interface.": "f_1 ffam_karla  f_m_1 ls_30 fore_6"
    }; 

    return <div className="corebox_19 row wrap gbasis_49  ">
        <div className="center col  mobilecorebox_15 back_2">
            <div className="maxedcorebox_x19 col center items_start">
                <div className="corebox_10 row items_center">
                <div className="pic_profile bidcorebox_13 cover borderradius_30" />
                </div>
                                
                {Object.entries(hometext).map(([text, classname]) => <span className={classname}>{text}</span>)}
                <div className="corebox_6 row items_center">
                    <input type="button" value="Get resume" className="maxedcorebox_3 ls_30 maxedcorebox_x9 border_0 f600 ffam_rubik"/>
                </div>
            </div>
        </div>
        <div className="center col items_start mobilehide back_blue_o0  ">
            {/* <Wrappedrow item={squareElement} list={["microverse","presidencia","unapec"]}  basis={29} marginh={30} marginv={30} className="items_start" />
            <Wrappedrow item={squareElementB} list={[0,0,0]}  basis={28} marginh={30} marginv={30} className="corebox_12 center" /> */}
        </div>
        <div className="center col center desktophide">
            <Wrappedrow item={squareElement} list={["microverse","presidencia","unapec"]}  basis={29} marginh={30} marginv={30} className="items_start" />
            <Wrappedrow item={squareElementB} list={[0,0,0]}  basis={28} marginh={30} marginv={30} className="corebox_12 center" />
        </div>
    </div>
}