import React, { useRef, useState } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import '../css/test/new_web_dash.css'
const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

export default function Web_dash() {

  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {

    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))

    set(i => {
      // setchanged(false)

      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * (window.innerWidth) + (down ? xDelta : 0)
      const sc = down ? 1 - distance / (window.innerWidth) : 1
      return { x, sc, display: 'block' }
    })
  })
  return <div className="web_dash">
    {props.map(({ x, display, sc }, i) => (
      <animated.div  {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
        <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`) }}>
          <div className="col">
            <div className="web_app_jpg muffinsmastermind"></div>

            <div className="row row_50 head">
              <span>Muffinsmastermind</span>
              {/* <div>
                            <div className="landscape_picture_0 muffinsmastermind active" />
                            <div className="landscape_picture_0 muffinsmastermind" />
                            <div className="landscape_picture_0 muffinsmastermind" />
                            <div className="landscape_picture_0 muffinsmastermind" />
                        </div> */}
            </div>
            <div className="row row_50">
              <div className="pointer_listener_web_app_jpg" />

              <span onClick={() => window.open('https://muffinsmastermind.herokuapp.com/', '_blank')} >
                <div className="svg viewcompact" />
                <span>Live Demo</span>
              </span>
              <span>
                <div className="svg eye" />
                <span>More Details</span>
              </span>
            </div>
          </div>

        </animated.div>

      </animated.div>
    ))}
  </div>
}

