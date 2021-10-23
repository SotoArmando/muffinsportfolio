import React from "react"


export default function Homeaboutsection() {
    const text = {
        "About me": "f_4 f800 ls_28 ffam_karla row items_center corebox_3",
        "I'm a software developer who specializes in building responsive websites for portfolios, dashboards, and unconventional sites. Love to code my customized widgets and create my own dependencies that solve practice issues, centralizing security issues, and decentralizing a high level interface. ": "f_1 ffam_karla  f_m_1 ls_30 fore_6 "
    }
    return <div className="" id="about">
        <div className="row gbasis_45 wrap ">
            <div className="corebox_15 center ">
                <div className="maxedcorebox_x18 col center items_start ">
                    {
                        Object.entries(text).map(([text,className])=> <span className={className} >{text}</span>)
                    }
                    <div className="corebox_6 row items_center">
                        <a type="button" rel="noopener noreferrer" value="Get resume" className="btn_u center maxedcorebox_3 ls_30 maxedcorebox_x9 border_0 f600 ffam_rubik" href={"https://docs.google.com/document/d/1kv1hzsaDiNOC3cp-dOv9bKlNRUCv8nld0YqH3_Ck01g/edit?usp=sharing"} target="_blank">Get resume</a>
                    </div>
                </div>
            </div>
        <div>
        <div>

        </div>
        </div>
    </div>

    </div>}