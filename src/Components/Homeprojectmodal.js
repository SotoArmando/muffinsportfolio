import { useEffect, useRef, useState } from "react"
import { act } from "react-dom/test-utils"
import Wrappedrow from "./Wrappedrow"

export default function Homeprojectmodal({active, setModalActive, picturesprev, urls: [liveurl, giturl, tags]}) {

    const [picture, setPicture] = useState(0);
    const modalReference = useRef();
    const landscapeElement = ({i, marginv, marginh}) => {
        return <div onClick={()=>setPicture(i)} className={`pad_24 btn_b back_black  half_horizontalmar half_verticalmar mar_t${marginv} mar_b${marginv} mar_r${marginh} mar_l${marginh}`}>
            <div className={`pic_${picturesprev}_${i} corebox_7  corebox_x4  contain transparent `}>

            </div>
        </div>
    }

    const labelElement = ({_id:text, marginh, marginv}) => {
        return <span className={`corebox_2 maxedcorebox_x8 back_black fore_9 pad_l33 pad_r33 center half_horizontalmar half_verticalmar mar_t${marginv} mar_b${marginv} mar_r${marginh} mar_l${marginh} ffam_karla tcenter`}>
            {text}
        </span>
    }

    useEffect(() => {
        const current = modalReference.current;
        if (current) {
            if (active) {
                console.log(active)
                current.focus();
                setTimeout(() => current.focus(), 100)
                current.scrollTo(0, 0);;
            }
        }
    }, [active]);

    return <div ref={modalReference} className={`fixed scrollable back_2 col left top allsize bodyheigth space_between items_center onactive_0 ${active ? "active" : ""}`}>
        <div className="col modal">
            <div className="corebox_3 mobilecorebox_7"></div>
            <div className=" back_black ">
                <div className={`col corebox_16 mobilecorebox_14 pic_${picturesprev}_${picture} contain transparent`}></div>
            </div>
            <div className="col corebox_15 ">
                <div className="row wrap space_between  back_black_o4 pad_r22 mobilepad_r0 ">
                    <div className="corebox_0 maxedcorebox_x19">
                    <Wrappedrow gridclassName='pad_24 row wrap start items_center back_black_o4 ' className='allsize' list={[0,1,2]} item={landscapeElement} g="" basis={42} marginh={26} marginv={26} />
                    </div>
                    <div className="corebox_7 mobilecorebox_10 maxedcorebox_x11 corebox_x11 col center items_start fore_9 mobilepad_l24">
                        <a className="row corebox_4 back_blue_o1 center corebox_x11 btn_u half_verticalmar mar_b22  ffam_karla f_1 f600" href={liveurl} rel="noreferrer" target="_blank">
                            See Live 
                            <div className="maskicon_newview iconsize_21 back_2 maxedcorebox_x3" />
                        </a>
                        <a className="row corebox_4 back_blue_o1 center corebox_x11 btn_u half_verticalmar mar_t22 ffam_karla f_1 f600" href={giturl} rel="noreferrer" target="_blank">
                            See Source
                            <div className="maskicon_github iconsize_22 back_2 maxedcorebox_x3" />
                        </a>
                    </div>
                </div>
                <div className="col mobilepad_l24">
                    <div className="ffam_karla f600 f_3 corebox_3 row items_center">Dothiscooking</div>
                    <div className="row start items_center corebox_4 ">
                        <Wrappedrow list={tags} item={labelElement} className="allsize" gridclassName="start items_center" marginh={22} marginv={22} />
                    </div>
                    <div className="f_1 ffam_karla  f_m_1 ls_30 fore_6 mobilepad_t23">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tempor lobortis. Sed dictum urna magna, et accumsan neque molestie vel. Nam lorem felis, efficitur quis auctor at, egestas ac lorem. Cras dapibus nunc a varius suscipit. Nam aliquam magna sapien, eget finibus libero viverra sed. Duis vel lacus pharetra, posuere nibh et, consequat felis. Fusce in quam non nunc tristique molestie. Sed eget augue odio. Ut consequat lectus a felis dignissim, eu condimentum justo dapibus. </div>
                    <div className="row center ">
                        <span role='button' aria-hidden onClick={() => setModalActive(false)} className="corebox_x6 center capitalize f_1 f600 ffam_karla btn_u corebox_4 tcenter">Close</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}