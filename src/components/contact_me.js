import React, { useEffect, useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring'

export default function Contact_me() {
    return <div className="Contact_me ">
        <div className="container col">
            <span className="title">Interested in collaborating?</span>
            <span className="summary">If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it.</span>
            <div className="contained_0 col">
                <div className="row row_50">
                    <input placeholder="Name" />
                    <input placeholder="Mail" />
                </div>

                <textarea placeholder="Message" />
                <form id="mail" method="post" action="mailto:dev.armando29@gmail.com?subject=Contact&amp;message=">
                    <input className="special_btn_0" type="submit" value="get in touch" />
                </form>

            </div>
            <div className="row row_0">
                <span>dev.armando29@gmail.com</span>
                <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin" />
                <a href="https://github.com/SotoArmando" className="svg github" />
                <a href="https://twitter.com/sotoarmando029" className="svg twitter" />
                <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow" />
            </div>

            <span className="bottom_title">© 2020  Sotoarmando</span>
        </div>
    </div>
}