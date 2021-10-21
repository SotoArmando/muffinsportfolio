import { useState } from "react/cjs/react.development"

export default function Homecollabsection() {
    const [controlledForm,setForm] = useState({})
    const {body, subject, name} = controlledForm;
    const text = {
        "Interested in collaboration?": "f_5 mar_b19 f600 ls_25 corebox_4 center ffam_inter",
        "Looking to connect? Send me an e-mail at armandosoto@sotoarmando.com, or check out my profile at sotoarmando.com": "maxedcorebox_x18 tcenter maxedcorebox_3 center ffam_inter",
    }

    function handleChange(event) {
        setForm({ ...controlledForm, [event.target.name]: event.target.value });
    }
    
    const Opennewmail = () => {
        window.open('mailto:armandosoto@sotoarmando.com?subject=' + subject + '&body=' + body + '&name=' + name);
    }

    return <div className="corebox_19 center col back_2">
        <div className="col">
        {Object.entries(text).map(([text,classname])=> <span className={classname}>{text}</span>)}

        <form name="mail" className="maxedcorebox_x20">
            <div className="col center">
                <div className="row basis_42 allsize  ">
                    <input onChange={handleChange} name="name" placeholder="Name" value={name} className="back_2 corebox_3 mobilemar_b24 pad_l27   pad_b14 ls_27 f_1 f_m_0" />
                    <input onChange={handleChange} name="subject" placeholder="Subject" value={subject} className="back_2 corebox_3 mobilemar_b24 pad_l27   pad_b14 ls_27 f_1 f_m_0 " />
                </div>

                <textarea onChange={handleChange} placeholder="Text" name="body" value={body} className="back_2 corebox_12 fore_11 ls_27 mobilemar_b24 mar_t24  mobilemar_t0 pad_l27 pad_t27 f_1 f_m_0 " />
                <div className="corebox_9 col center border_t0 ">

                    <input  className="special_btn_0 back_black fore_9   corebox_x10 corebox_3 center ffam_karla ls_27 f_1 f_m_0" style={{ textAlign: "center" }} value="Get in touch" onClick={() => Opennewmail()} />

                </div>

            </div>
        </form>
        </div>

    </div>
}