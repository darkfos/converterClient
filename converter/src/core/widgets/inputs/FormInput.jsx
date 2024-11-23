export const CustomInput = ({type, placeholder, classN, on_ch, sel = null, is_conv = false}) => {
    return <input type={type} placeholder={placeholder} className={classN} onChange={(e) => {
        if (is_conv) {
            on_ch(e.target.files[0])
        } else {
            on_ch(e.target.value);
        }
    }} accept={sel ? "."+sel.toLowerCase() : null} id={sel}/>
}