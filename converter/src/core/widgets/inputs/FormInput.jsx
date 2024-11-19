export const CustomInput = ({type, placeholder, classN, on_ch, sel = null}) => {
    return <input type={type} placeholder={placeholder} className={classN} onChange={(e) => {
        on_ch(e.target.value);
    }} accept={sel ? "."+sel.toLowerCase() : null} id={sel}/>
}