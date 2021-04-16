import React from 'react';
import { Link } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react';
export default function Nav() {
    const handleSidenavtoggle = () => {
        document.querySelector(".nav_side_body").classList.toggle('active')
    };
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)
    
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold:0.1
    }
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
    }
    useEffect(() => {
        const element = document.querySelector("#anchor_0")
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])
    return (
        <div>
            <div className={"nav transition_a0 "+(isVisible ? "" : "back_2 boxshadow_27")}>
                <div className="nav_body row ">
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
            <div ref={containerRef} id="anchor_0" className="absolute top left corebox_4 ">

            </div>
        </div>
    )
}