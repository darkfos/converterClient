import { Fragment } from "react";
import "../../../static/styles/component.css";
import Logo from "../../../static/images/logo.jpg";
import { Link } from "react-router-dom";
import CustomBtn from "../../widgets/customBtn/CustomBtn";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";


function HeaderComponent () {

    const navigator = useNavigate();

    const logoStyle = {
        width: "50%",
        height: "auto"
    };

    const styleLeaveButton = {
        backgroundColor: "#FF230C",
        borderRadius: "10px",
        border: "none",
        padding: "5px",
        color: "white",
        width: "4vh",
        margin: "auto",
        fontSize: "25px",
        transition: "all 1.5s ease-in-out"
    };

    const dispatch = useDispatch();


    const onClickLeave = (e) => {
        dispatch(setAccessToken(null));
        dispatch(setRefreshToken(null));
        document.cookie = "";
        navigator("/");
        window.location.reload()
    }

    return <Fragment>
        <header className="headerConvert">
            <div className="img">
                <img src={Logo} style={logoStyle}></img>
            </div>
            <nav className="headerConvert__menu">
                <Link to="/" onMouseEnter={(e) => {
                    e.target.classList.add("header_element_hover");
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("header_element_hover");
                }}>Главная</Link>
                <Link to="/convert" onMouseEnter={(e) => {
                    e.target.classList.add("header_element_hover");
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("header_element_hover");
                }}>Конвертация</Link>
                <Link to="/compress" onMouseEnter={(e) => {
                    e.target.classList.add("header_element_hover");
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("header_element_hover");
                }}>Сжатие</Link>
                <Link to="/profile" onMouseEnter={(e) => {
                    e.target.classList.add("header_element_hover");
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("header_element_hover");
                }}>Профиль</Link>
                <br />
                <br />
                <CustomBtn text="&times;" style={styleLeaveButton} do_e={onClickLeave} on_hover="width: 50%; font-size: 40px"/>
            </nav>
        </header>
    </Fragment>
}


export default HeaderComponent;