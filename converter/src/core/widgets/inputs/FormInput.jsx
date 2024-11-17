export const CustomInput = ({type, placeholder, classN, on_ch}) => {
    return <input type={type} placeholder={placeholder} className={classN} onChange={(e) => {
        on_ch(e.target.value);
    }}/>
}