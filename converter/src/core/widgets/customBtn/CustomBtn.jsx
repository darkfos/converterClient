
const CustomBtn = ({text, style, do_e, on_hover, classN = null, idU = null}) => {
    let do_prev = null;
    return <button style={style} onClick={do_e} onMouseEnter={(e) => {
        do_prev = e.target.style.cssText;
        e.target.style.cssText = e.target.style.cssText + on_hover;
    }} onMouseLeave={(e) => {
        e.target.style.cssText = do_prev;
    }} className={classN? classN : ""} id={idU? idU : ""}>
        {text}
    </button>
}


export default CustomBtn;