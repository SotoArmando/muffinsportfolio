import React, { useEffect, useRef, useState } from "react"

export default function Pathnavigatorhandler({ paths , gridclassname}) {
    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            console.log("entry.isIntersecting",entry.isIntersecting)
            setActiveBackground(!entry.isIntersecting)
        });
    }

    const [activepath, setpath] = useState(0);
    const [activebackground, setActiveBackground] = useState(false);
    const [intersectionObserver] = useState(new IntersectionObserver(intersectionCallback, {
        rootMargin: '0px',
        threshold: 0
    }))
    const social =["intro", "portfolio","about","contact"]
    const handlePathsClick = (path) => setpath(path)

    const backgroundReference = useRef();

    useEffect(() => {
        const currentBackground = backgroundReference.current;
        if (currentBackground)
        {        
            intersectionObserver.observe(currentBackground);
        }
        return () => {
            intersectionObserver.disconnect()
        } 
    }, [intersectionObserver])
    
    return [
    <div ref={backgroundReference} className={`corebox_3`} />,   
    <div className={`fixed corebox_3 left top back_2 boxshadow_24 z_index0 onactive_1 ${activebackground ? 'active': ''}`} />,   
    <div className={`${gridclassname || "row  corebox_3 nav  center wrap   ls_30 "} `}>
      
        <div className="modal gbasis_40 row allsize z_index4">
            <div className="row center">
                <div className="maxedcorebox_x18 mobilemaxedcorebox_x20 col center items_start">
                    <span className="ffam_rubik f800 f_4 fore_blue_o0 ls_0 mobilepad_22">AS</span>
                </div>
            </div>
            <div className="row gbasis_36">
                {social.map((e,i) => 
                <a onClick={() => handlePathsClick(i)} href={`#${e}`} className={`center btn_u corebox_3 f_1 f_m_0 ffam_karla ${i === activepath ? " f700 fore_blue_o0" : " f600"} capitalize`}>{`${i === activepath ? '[:' : ''}${e}${i === activepath ? ']' : ''}`}</a>)}
            </div>
        </div>
    </div>,
    <div className="corebox_8 desktophide" />
    ]
}