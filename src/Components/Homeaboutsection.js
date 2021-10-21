export default function Homeaboutsection() {
    const text = {
        "About me": "f_3 f800 ls_28",
        "I'm a software developer who specializes in building responsive websites for portfolios, dashboards, and unconventional sites. Love to code my customized widgets and create my own dependencies that solve practice issues, centralizing security issues, and decentralizing a high level interface. ": "f_1 ffam_karla  f_m_1 ls_30 fore_6 "
    }
    return <div className="center">
<div className="row gbasis_43 wrap maxedcorebox_x23">
        <div className="corebox_15 col center ">
        <div className="maxedcorebox_x19 col center items_start pad_l22">
        {
            Object.entries(text).map(([text,className])=> <span className={className} >{text}</span>)
        }
        </div>
        </div>
        <div>

        </div>
    </div>

    </div>}