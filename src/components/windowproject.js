import React from "react"

export default function Windowproject({switchWindowprojectIsOpen: handleClick}) {
    return <div className="fixed allsize lef top center back_5">
        <div className="maxedcorebox_18 allsize corebox_14">
            <span onClick={handleClick}>Close</span>
            Windowproject says: Hello world!
        </div>
    </div>
}