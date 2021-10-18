export default function Homecollabsection() {
    const text = {
        "Interested in collaboration?": "f_5 mar_b19 f600 ls_25 corebox_4 center ffam_inter",
        "Looking to connect? Send me an e-mail at armandosoto@sotoarmando.com, or check out my profile at sotoarmando.com": "maxedcorebox_x16 tcenter maxedcorebox_3 center ffam_inter",
    }
    return <div className="corebox_17 center col">
        {Object.entries(text).map(([text,classname])=> <span className={classname}>{text}</span>)}
        <div className="corebox_8 center">
            <textarea placeholder="Mail content" className="corebox_x15 back_2 corebox_6"/>
        </div>
        <input type="button" value="Send" className="corebox_3 corebox_x5 center border_0 ffam_inter f600" />
    </div>
}