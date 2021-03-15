import React from 'react';

export default function Sendmail() {
    return <form id="mail" method="post" className="corebox_x7" action="mailto:dev.armando29@gmail.com?subject=Contact&amp;message=">
    <div className="row row_3 " >
        <span className="span_4 corebox_x7 corebox_6 col end items_center" >
            <svg className="object_0 maxedcorebox_5" onClick={() => document.querySelector('#mail').submit()}
                id="logoSVG" version="1.1" x="0px" y="0px" viewBox="0 -2 25 54.16666666666668" enable-background="new 0 0 34 73.66666666666668" >
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
            <span className="f500 ls_27 ffam_0 f_0 mar_t31">Contact</span>
        </span>
    </div>
</form>
}