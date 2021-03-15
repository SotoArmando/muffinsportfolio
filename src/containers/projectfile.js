import React from "react";
import { useParams } from "react-router"

export default function Projectfile() {
    const { project } = useParams();
    const cname = "corebox_16_9 backsize_100 transparent pic_" + project;

    return <div className="corebox_20 row center items_end pad_t35 mobilepad_t34">
        <div className="maxedcorebox_x20 back_2 col corebox_20 ">
            <div className={cname} />
            <div className="row basis_45 maxedcorebox_8 mobilemaxedcorebox_11 ">
                <div className="row center">
                    <div className=" mar_l16 mar_r16 border_5">
                        <div className="corebox_16_9 corebox_x7 pic_mastermind_1 backsize_100  fix_16_9_0"></div>
                    </div>
                    <div className=" mar_l16 mar_r16 ">
                        <div className="corebox_16_9 corebox_x7 pic_mastermind_1 backsize_100 "></div>
                    </div>

                    <div className=" mar_l16 mar_r16 ">
                        <div className="corebox_16_9 corebox_x7 pic_mastermind_1 backsize_100 "></div>
                    </div>
                </div>
                <div className="row center items_center f500  ls_25 basis_20 ">
                    <span className="corebox_5 row center back_23 corebox_x7 maxedcorebox_x7 mar_l17 mar_r17 fore_13 f_0 btn_u borderradius_14">See live</span>
                    <span className="corebox_5 row center back_23 corebox_x8 maxedcorebox_x8 mar_l17 mar_r17 fore_13 f_0 btn_u borderradius_14">See source</span>
                </div>
            </div>

            <div className="col pad_l35 pad_r35 mobilepad_l24 mobilepad_r24 border_02">
                <div className="col corebox_6 center items_start">
                    <span className="f_5 f_m_3 f700 ffam_0 fore_19">Muffinsmastermind</span>
                </div>
                <span className="f_0 ls_25 lh_2 fore_13 corebox_7 center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>
            </div>
        </div>
    </div>
}