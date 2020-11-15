import React, { useEffect, useState } from 'react';
import Mobile_display from './mobile_display';
import img_0 from '../res/svg/email.svg'


export default function Home_dash(props) {
    let [load, setload] = useState(false);

    useEffect(() => {
      if (!load) {
        document.querySelector('body').style.margin = '';
        document.querySelector('body').style.width = '';
        document.querySelector('#app > div.nav > div.nav_body.row').style.borderRight = '';
        document.querySelector('#root').style.backgroundColor = ''
        setload(true);
      }
    })

    return <div className="row row_50 minview nav_margin">
        <div className="col col_0">
            <div className="col">
                {/* <div className="nice_circle_0" ></div> */}
                <div className="col col_1">
                    <span className="span_1">Hey There. I'm Armando.</span>
                    <span className="span_1 color_1">I'm Full-Stack Developer student at Microverse</span>
                    {/* <span className="none_unless_1024">Mobile app developer</span> */}
                    {/* <span className="none_unless_1024">Ambitious product designer of it own ideas</span> */}
                </div>
                <span className="span_2">
                    Hi, I'm Armando, a developer living at <span className="span_3">Santo Domingo</span>.  <span className="span_3">Currently open for job opportunities</span>. I enjoy building mobile apps and games. Look over some of my work! If you have anything precious to code don't hesitate letting me know.
                </span>
                <form id="mail" method="post" action="mailto:dev.armando29@gmail.com?subject=Contact&amp;message=">
                    <div className="row row_3" >
                        <span className="span_4" >
                            <svg className="object_0" onClick={() => document.querySelector('#mail').submit()}
                                id="logoSVG" version="1.1" x="0px" y="0px" viewBox="0 -2 24 52" enable-background="new 0 0 24 52" >
                                <path fill="none" d="M 3 10 L 12 17.5 L 21 10" stroke="#969696" stroke-width="1.25" opacity=".54">
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseover" values="#969696;#ffffff;" />
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseout" values="#ffffff;#969696;" />
                                </path>
                                <path fill="none" stroke="#969696" stroke-width="1.25" stroke-miterlimit="10" d="M 21.2 24 L 2.8 24 C 2.3 24 2 23.7 2 23.3 L 2 10.7 C 2 10.3 2.3 10 2.8 10 L 21.3 10 C 21.7 10 22.1 10.3 22.1 10.7 L 22.1 23.3 C 22 23.7 21.7 24 21.2 24 Z">
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseover" values="#969696;#ffffff;" />
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseout" values="#ffffff;#969696;" />
                                </path>

                                <path fill="none" stroke="#969696" stroke-width="1.25">
                                    <animate attributeName="d" dur="357ms" fill="freeze" begin="logoSVG.mouseover" values="M 3 10 L 12 17.5 L 21 10;M 3 10 L 12 2.4 L 21 10" keyTimes="0; 1" calcMode="spline" keySplines="0,.69,.38,1" />
                                    <animate attributeName="d" dur="357ms" fill="freeze" begin="logoSVG.mouseout" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" values="M 3 10 L 12 2.4 L 21 10;M 3 10 L 12 17.5 L 21 10" />
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseover" values="#969696;#ffffff;" />
                                    <animate attributeName="stroke" dur="357ms" fill="freeze" keyTimes="0;1" calcMode="spline" keySplines="0,.69,.38,1" begin="logoSVG.mouseout" values="#ffffff;#969696;" />
                                </path>
                            </svg>
                            <span >Contact</span>
                        </span>
                    </div>
                </form>

            </div>
            <div className="col col_3">
                <span className="span_0">
                    Social
                </span>
                <div className="row row_0">
                    <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin" />
                    <a href="https://github.com/SotoArmando" className="svg github" />
                    <a href="https://twitter.com/sotoarmando029" className="svg twitter" />
                    <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow" />

                </div>
                {/* <div className="row row_5" >
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Collaborate</span>
                </div> */}
            </div>

        </div >
        <Mobile_display />
    </div >

}

