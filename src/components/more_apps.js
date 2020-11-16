import React, { useEffect, useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring'

export default function More_apps() {
    return (
        <div className="More_apps col">
            <div className="container ">
                <div className="col">
                    <span className="title">More Apps</span>
                    <div className="row row_50">
                        <a href="/viewport/muffinsmastermind"><span>Muffinsmastermind</span></a>
                        <a href="/viewport/battleships"><span>Battleships</span></a>
                    </div>
                </div>


            </div>
        </div>
    )   
}