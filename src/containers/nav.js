import React from 'react';
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';
export default function Nav({ progress }) {
    const handleSidenavtoggle = () => {
        document.querySelector(".nav_side_body").classList.toggle('active')
    };
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)


    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    }
    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    function convertRemToPixels(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const handleNavgoto = (i) => {
        if (i === 4) {
            window.scrollTo(0,document.body.scrollHeight);
        } else {
            document.querySelector(["#section_" + i]).scrollIntoView({ block: "start" });
            window.scroll(0, window.scrollY - (convertRemToPixels(4.275)));
        }

    }
    useEffect(() => {
        const element = document.querySelector("#anchor_0")
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])
    return (
        <div>
            <div className={"nav transition_a0 "}>
                <div className="nav_body row corebox_5" >
                    <div className="corebox_x8 mobilecorebox_x2">
                        <div className="svg menu" onClick={handleSidenavtoggle} />
                    </div>
                    <div>
                        {/* <span>Homepage</span>
                    <span>Porfolio</span>
                    <span>About</span>
                    <span>Contact</span> */}
                    </div>
                </div>

                <div className="nav_side_body col mobilecorebox_x100 maxedcorebox_x15 items_center">
                    <Link to='/' onMouseUp={handleSidenavtoggle}><span className="corebox_x14 row start items_center">Home</span></Link>
                    <Link to='/web/muffinsmastermind' onMouseUp={handleSidenavtoggle}><span className="corebox_x14 row start items_center">Projects</span></Link>


                    <a onClick={handleSidenavtoggle}  ><span className="corebox_x14 row start items_center">Close</span></a>
                    <div className="col col_3">
                        <span className="span_0_white ">
                            armandosoto@sotoarmando.com
                    </span>
                        <div className="row row_0 ">
                            <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin " />
                            <a href="https://github.com/SotoArmando" className="svg github" />
                            <a href="https://twitter.com/sotoarmando029" className="svg twitter" />
                            <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow" />

                        </div>
                    </div>
                </div>
            </div>
            <div ref={containerRef} id="anchor_0" className="absolute top left corebox_5 " style={{ pointerEvents: "none" }}>

            </div>
            <div className={"nav row corebox_5 back_2  z_index14 center" + (isVisible ? "" : " boxshadow_20")} style={{ transform: (isVisible ? "translateY(-100%)" : "translateY(0)"), pointerEvents: (isVisible ? "none" : "all") }}>
                <div className="nav_body corebox_5  end items_center ls_30 ffam_1 f_1 f700  fore_11" style={{ maxWidth: "84.21053vw !important" }}>
                    <div className="row center maxedcorebox_x18 wrap nice_nav_0">
                        {
                            ["Home", "Projects", "About", "Experiences", "Contact"].map((e, i) =>
                                <div onClick={() => handleNavgoto(i)} className={"transition_0 corebox_x" + [6, 6, 6, 8, 7][i] + " maxedcorebox_x" + [6, 6, 6, 8, 7][i] + " row center btn_u " + (progress == i ? "fore_20" : "")}>{e}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}