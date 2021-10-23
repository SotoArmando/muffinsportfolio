import Wrappedrow from './Wrappedrow'

export default function Homelandingsection() {

    const hometext = {
        "Pretty code by ingenious person": "f_7 f700  ffam_karla maxedcorebox_x17 corebox_9 mobilecorebox_11",
        "Hello I am a software developer! I can help you build a product, featre or website. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.": "f_1 ffam_karla  f_m_1 ls_30 fore_6"
    }; 

    const social_networks = Object.entries({
        "twitter":"https://twitter.com/sotoarmando029",
        "linkedin":"https://www.linkedin.com/in/armandosotomelo/",
        "angellist":"https://angel.co/u/armando-soto-1","medium":"https://medium.com/@dev.armando29",
        "stackoverflow":"https://stackoverflow.com/users/5007444/sotoarmando",
        "github":"https://github.com/SotoArmando"
    })

    return <div className="corebox_19 row wrap gbasis_47  " id="intro">
        <div className="center col corebox_18 mobilecorebox_15 back_2">
            <div className="maxedcorebox_x18 col center items_start">
                <div className="corebox_10 row items_center">
                    <div className="pic_profile bidcorebox_13 cover borderradius_30" />
                </div>
                <div className="col">
                    {Object.entries(hometext).map(([text, classname]) => <span className={classname}>{text}</span>)}
                </div>
                <div className="row space_between gbasis_43 corebox_4 mobilecorebox_5 items_end">
                    <div className="f_1 ffam_karla ls_30 fore_6 f800 corebox_4 row items_end ">My work in social networks</div>
     
                    <Wrappedrow gridclassName="corebox_4 items_end" basis={29} marginh={18} marginv={22} list={social_networks} item={({_id: [text, link], marginh, marginv}) => <a className={`corebox_x1  back_blue_o0 maskicon_${text} mar_t${marginv} mar_b${marginv} mar_r${marginh} mar_l${marginh}`} href={link} target="_blank" rel="noreferrer" aria-hi></a>} />
                
                </div>
            </div>
        </div>
        <div className="center col back_blue_linear_o1 relative mobilehide">
            {/* <div className="maskicon_darkmode back_2 iconsize_22" /> */}
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