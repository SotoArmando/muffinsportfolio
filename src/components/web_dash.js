import React, { useEffect, useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring'
import Contact_me from "./contact_me";
import More_apps from "./more_apps";

const data = {
    "muffinsmastermind": {
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
    "battleships": {
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
    },
}




let prevent = false;

export default function Web_dash() {
    const [seconds, setSeconds] = useState(2);
    const [isoff, setIsoff] = useState(true);
    const [c, setC] = useState(0);
    const [loaded, set_loaded] = useState({
        width: window.visualViewport.width,
        load: false,
        page: (new URL(window.location)).searchParams.get("page"),
    });


    const { width, page } = loaded;
    const { pic, source, live_demo, tags, msg } = data[page];
    const [props, set] = useSprings(pic.length, i => ({ x: (i * loaded.width), sc: 1, display: (i === 0) ? 'block' : 'none', o: 1 }))

    const easeIntQuad = function (k) { return Math.sqrt(1 - --k * k); };

    useEffect(() => {
        const { load } = loaded;
        if (load === false) {
            console.log("usin effect")
            window.addEventListener('scroll', handleScroll);
            document.querySelector('body').style.margin = '0';
            document.querySelector('body').style.width = '100vw';
            document.querySelector('#app > div.nav > div.nav_body.row').style.borderRight = '0';
            document.querySelector('#root').style.backgroundColor = 'rgb(240, 240, 240)'
            set_loaded({ ...loaded, load: true });
        }

        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            if (seconds - 1 === 0) {
                setIsoff(false)
                const { pageTop } = window.visualViewport;
                const { width } = loaded;
                const c = ((pageTop % (width + 0.00000000000001)) / width)
                prevent = true;
                window.scrollTo(0, width * (Math.floor(pageTop / width) + (c > 0.5 ? 1 : 0)))
                setTimeout(() => { prevent = false }, 300)
            }
        }, 200);
        return () => {
            clearInterval(interval)
        };
    })
    const update = () => {
        if (!prevent) {
            setSeconds(2);
            if (isoff == true) setIsoff(true);
        }
        const { pageTop } = window.visualViewport;
        setC(pageTop);
        const { width } = loaded;
        const c = ((pageTop % (width + 0.00000000000001)) / width)
        const c_i = Math.floor(pageTop / width);


        set(i => {
            let x = (((i * width) * -1) + pageTop) * -1;
            let sc = 0.80;
            let o = 0.24;

            if (i === c_i + 1) {
                o += (0.76 * easeIntQuad(c))
                sc += (0.20 * easeIntQuad(c))
            } else if (i === c_i) {
                o += (0.76 * easeIntQuad(1 - c))
                sc += (0.20 * easeIntQuad(1 - c))
            }
            return {
                o: (i >= (pic.length - 2)) ? 1 : o,
                sc: (i >= (pic.length - 2)) ? 1 : sc,
                x: x,
                display: (x < (width * 1) * -1 || x > width) ? 'none' : 'block'
            }
        })
    }
    const handleScroll = () => update();
    const c_1 = c / (width * (pic.length - 1))
    const handleElement = (i) => pic[i];
    const index = Math.floor(c_1 * pic.length);
    const willshow = !isoff && (Math.floor(c_1 * (pic.length)) < pic.length - 2);
    console.log(page);
    return (

        <div className="good_container" style={{ minHeight: `calc(${pic.length}00vw - 100vh)` }}>
            {
                props.map(({ x, display, sc, o }, i) => (
                    <animated.div key={i} style={{
                        willChange: 'transform, opacity', display, position: 'fixed', transform: interpolate(
                            [
                                x.interpolate(x => `translate3d(${x}px,0,0)`),
                                sc.interpolate(sc => `scale(${sc})`)
                            ], (x, sc) => `${x} ${sc}`), opacity: o.interpolate(o => `${o}`)
                    }}>

                        {(i >= (pic.length - 2)) ?
                            handleElement(i)
                            :
                            <div className={`special_div_0 web_app_png ${pic[i]}`} />}
                    </animated.div>

                ))
            }

            <div className="good_display" style={{ transition: 'opacity 357ms', opacity: willshow ? 1 : 0, pointerEvents: willshow ? 'all' : 'none', willChange: 'opacity' }}>
                <div className="good_display_container row row_50">
                    <div>
                        <div className="good_display_picture" />
                        <div className="good_display_container1">
                            <span className="span_6 fe5">{page}</span>
                        </div>
                        <div className="tags_row">
                            <div>
                                {tags.map(i => <span>{i}</span>)}
                            </div>
                            <div>
                                <a className='btn' href={live_demo} target="_blank"><span className="svg launch" /><span>Live demo</span></a>
                                <a className='btn' href={source} target="_blank"><span className="svg github" /><span>Source Code</span></a>
                            </div>
                        </div>
                        <span className="good_display_container_1 good_text">

                            <span className="center">Available for: Mobile and Desktop Screens</span>
                        </span>

                    </div>
                    <div>
                        <div className={`web_app_png mobile_app_jpg mobile ${index < (pic.length - 1) ? pic[index] : 0}`} />
                    </div>

                </div>

            </div>
            <div className="good_msg fe1" style={{ transition: 'opacity 357ms', opacity: (isoff && seconds < 2) ? 1 : 0, willChange: 'opacity' }}>Auto center in {seconds} seconds</div>
            <div className="good_msg_bar">
                <animated.div className="bar" style={{ transform: `scaleY(${c_1})`, willChange: 'transform' }} />
            </div>
            <div className="good_msg_bar_back">
                <div className="bar" >
                    <animated.div className="bar_msg" style={{ transform: `translateY(calc(${50 * c_1}vh - 100%))`, willChange: 'transform' }}> {msg[Math.floor((pic.length - .5) * c_1)]} </animated.div>
                </div>
            </div>
        </div>




    )

}

