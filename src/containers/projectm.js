import React, { useEffect, useState } from 'react';

export default function Projectm({ isFirst, isLast, name, pic, tags }) {
    const cname = "allsize  corebox_12 col items_start start f_0  f700 pad_l24 pad_r24  ffam_0 pic_e secbacksize_12 msecbacksize_11 " + pic
    let classname = "corebox_12  tcenter row center  relative pad_l20 pad_r20   mobilepad_t24  hover relative btn"
    return <span className={classname}>
        <div className="back_3 corebox_12">
            <div className={cname}>
                <span className="pad_l0 pad_r17 fore_9 ls_27 corebox_4 start items_center ">{name}</span>
            </div>
        </div>
     

        <div className="to_hover absolute  allsize  fore_9 f600 pad_r20  pad_l20 mobilepad_t24">
            <div className="f_0  allsize col end items_center back_22"  >
                <div className="maxedcorebox_0 back_24 row end items_center pad_l20 pad_r20">
                    {tags.map(e => <span className="pad_l20 pad_r20  mar_l16 mar_r16  center widthunset  ">{e}</span>)}
                </div>


                {/* <span className="back_21 mar_l16 mar_r16 corebox_3 corebox_x9 center widthunset btn_u ">See the project</span> */}
            </div>
        </div>
        <div className="to_hover absolute col allsize fore_9 f600 pad_l24 pad_r24 mobilepad_t24 ">
            <span className="pad_l20 pad_r17 fore_9 ls_27 corebox_4 start items_center f_0  ffam_0 f700">{name}</span>
            <div className="row start items_start f_0 pad_l20 pad_r20 nmar_l16 nmar_r16" >

                
                {/* {tags.map(e => <span className="pad_l20 pad_r20 back_21 mar_l16 mar_r16 corebox_1 center widthunset ">{e}</span>)} */}
            </div>
        </div>
    </span>
}