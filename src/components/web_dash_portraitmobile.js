import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSprings, animated, interpolate } from 'react-spring'
import Projectl from '../containers/projectl';
import Projectm from '../containers/projectm';
import Contact_me from "./contact_me";
import More_apps from "./more_apps";

const data = [
    {
        tags: ["Mastermind", "Player vs CPU", "Player vs Player"],
        live_demo: "https://muffinsmastermind.herokuapp.com/",
        source: "https://github.com/SotoArmando/muffinsmastermind",
        msg: [
            "Muffinsmastermind",
            "VS Mode Selection",
            "Codemaker Setup Panel",
            "Codebreaker Turn",
            "Codemaker Turn",
            "Winner Msg",
            "More apps",
            "Contact",
        ],
        pic: [
            "muffinsmastermind",
            "muffinsmastermind_a",
            "muffinsmastermind_b",
            "muffinsmastermind_d",
            "muffinsmastermind_e",
            "muffinsmastermind_c",
            <More_apps />,
            <Contact_me />,
        ]
    },
    {
        tags: ["Battleships", "Player vs CPU"],
        live_demo: "https://sotoarmando.github.io/odin-battleships/dist/index.html",
        source: "https://github.com/SotoArmando/odin-battleships",
        msg: [
            "Battleships",
            "Battleships",
            "Battleships",
            "Battleships",
            "Battleships",
            "Battleships",
            "Battleships",
            "Battleships    ",
        ],
        pic: [
            "battleships",
            "battleships_a",
            "battleships_b",
            "battleships_d",
            <More_apps />,
            <Contact_me />,
        ]
    }
]



export default function Web_dash_portraitmobile() {





    return (
        <div>
            <div className="corebox_19 col pad_l33 pad_r33 mobilepad_l24 mobilepad_r21 border_01 center items_center border_02 overflowhidden pad_t33">
                <div className="col allsize">
                    <span className=" f800 fore_11 row start items_center corebox_5  ls_27 lh_2 ffam_0 f_3 ">Projects</span>
                    <div className="row wrap basis_44 corebox_12 start items_center mar_b23 nmar_l20 nmar_r20 ">
                        <Projectl isLast={true} name={"Muffinsmastermind"} pic="pic_mastermind_0" />
                        <Projectl isFirst={true} name={"Sotoarmandobrainspace"} pic="pic_e" />
                    </div>
                    <div className="row wrap basis_44 corebox_12 start items_center nmar_l20 nmar_r20 ">
                        <Projectm isFirst={true} name={"Brilliant"} pic="pic_brilliant_0" />
                        <Projectm name={"Codicookingtimer"} pic="pic_codi_0" />
                        <Projectm isLast={true} name={"Budgetboy"} pic="pic_budget_0" />
                    </div>
                </div>
            </div>
        </div>
        // <div className="good_container" >
        // 	{
        // 		data.map(e =>  (<div className={`special_div_1 web_app_png ${e.pic[0]}`}>{e.tags[0]}</div>)) 
        // 	}




        // </div>




    )

}

