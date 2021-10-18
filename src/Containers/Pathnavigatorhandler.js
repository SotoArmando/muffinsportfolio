export default function Pathnavigatorhandler({ paths , gridclassname}) {
    const handlePathsClick = (path) => {

    }
    const social =["Twitter", "Linkedin","Angel list","Medium","sotoarmando.com"]
    return [
        <div className={`${gridclassname || "row corebox_3 nav  center wrap back_2 boxshadow_24"}`}>
        {social.map(e => <span className="corebox_x6 center btn_u corebox_3">{e}</span>)}
    </div>,
    <div className="corebox_8 desktophide" />
    ]
}