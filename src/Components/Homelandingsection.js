import Wrappedrow from './Wrappedrow'

export default function Homelandingsection() {
    const squareElementB = ({marginh,marginv}) => {
        return <div
         className={` bidcorebox_17 border_0 half_horizontalmar half_verticalmar mar_t${marginh} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
        </div>
    }
    const squareElement = ({marginh,marginv,_id:pic,i}) => {
        return <div className={`col center corebox_18 pad_t33 half_horizontalmar half_verticalmar mar_t${marginh} mar_b${marginv} mar_r${marginh} mar_l${marginh}`} >
            <div 
            className={`  corebox_17 corebox_x14  transparent contain  pic_${pic} `}>
            </div>
            <div className="corebox_0" />
            <div className="row">
                <div className="center corebox_x6 back_black_o0">
                    <div className={`pic_icon${pic} bidcorebox_9 contain transparent`}></div>
                </div>
                <div className="corebox_4 back_black_o0 col pad_24 borderrigth_14 pad_t26 center items_start maxedcorebox_x11">
                    <span className="ffam_inter capitalize f600 ls_28 f_1 pad_b20 btn_u">{pic}</span>
                    <span className="ffam_rubik row items_center ls_28">Get at play store</span>
                </div>
            </div>
            
            <div className="pad_22">
            </div>
        </div>
    }

    const hometext = {
        "Pretty code by ingenious person": "f_7 f700  ffam_karla maxedcorebox_x17 corebox_9 mobilecorebox_12",
        "Hello I'm a software developer! I specialize in building responsive websites for portfolios, dashboards, and unconventional sites. Love to code my customized widgets and create my own dependencies that solve practice issues, centralizing security issues, and decentralizing a high level interface.": "f_1 ffam_karla  f_m_1 ls_30 fore_6"
    }; 

    return <div className="corebox_19 row wrap gbasis_43  ">
        <div className="center col corebox_18 mobilecorebox_15 back_2">
            <div className="maxedcorebox_x19 col center items_start">
                <div className="corebox_10 row items_center">
                    <div className="pic_profile bidcorebox_13 cover borderradius_30" />
                </div>
                <div className="col">
                    {Object.entries(hometext).map(([text, classname]) => <span className={classname}>{text}</span>)}
                </div>
                <div className="corebox_6 row items_center">
                    <input type="button" value="Get resume" className="maxedcorebox_3 ls_30 maxedcorebox_x9 border_0 f600 ffam_rubik"/>
                </div>
            </div>
        </div>
        <div className="center col back_blue_o0 relative ">
            <div className="maskicon_darkmode back_2 iconsize_22" />
            {/* <Wrappedrow item={squareElement} list={["brilliant","budgetboy","codicook"]} grid basis={29} marginh={0} marginv={30} className="center allsize" gridclassName="center alsize"/>
            <div className="absolute rigth top maxedcorebox_x14 corebox_5 ffam_inter ls_28 f_1  back_black_o0 mar_t33 ">
                <div className="row items_center corebox_5 pad_22 pad_t28 pad_b26">
                    <div className="corebox_x4 center">
                        <div className="pic_playstore contain bidcorebox_8 transparent " />
                    </div>
                    <div className="col center items_start">
                        <span className="f_1 f500 ls_28 pad_b22">Currently Available at</span>
                        <span className="f_1 f500 ls_28">Google Play</span>
                    </div>
                </div>
                
            </div> */}
        </div>

    </div>
}