import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSprings, animated, interpolate } from 'react-spring'
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

        <div className="good_container" >
			{
				data.map(e =>  (<div className={`special_div_1 web_app_png ${e.pic[0]}`}>{e.tags[0]}</div>)) 
			}

          
			
			
        </div>




    )

}

