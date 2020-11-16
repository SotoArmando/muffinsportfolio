import React from 'react';
import { Link } from 'react-router-dom'
export default function Nav() {
    const handleSidenavtoggle = () => {
        document.querySelector(".nav_side_body").classList.toggle('active')
    };

    return (
        <div className="nav">
            <div className="nav_body row ">
                <div>
                    <div className="svg menu" onClick={handleSidenavtoggle} />
                </div>
                <div>
                    {/* <span>Homepage</span>
                    <span>Porfolio</span>
                    <span>About</span>
                    <span>Contact</span> */}
                </div>
            </div>
            <div className="nav_side_body col">
                <Link to='/' onMouseUp={handleSidenavtoggle}><span>Home</span></Link>
                <Link to='/web/muffinsmastermind' onMouseUp={handleSidenavtoggle}><span>Web projects</span></Link>
                <Link to='/mobile/muffinsmastermind' onMouseUp={handleSidenavtoggle}><span>Mobile projects</span></Link>
                <Link to='/web/muffinsmastermind' onMouseUp={handleSidenavtoggle}><span>Hackerrank</span></Link>
                <Link to='/web/muffinsmastermind' onMouseUp={handleSidenavtoggle}><span>Repl.it</span></Link>
                <a onClick={handleSidenavtoggle}><span>Close</span></a>
                <div className="col col_3">
                    <span className="span_0_white">
                        Armando Soto
                    </span>
                    <div className="row row_0">
                        <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin" />
                        <a href="https://github.com/SotoArmando" className="svg github" />
                        <a href="https://twitter.com/sotoarmando029" className="svg twitter" />
                        <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow" />

                    </div>
                </div>
            </div>
        </div>
    )
}