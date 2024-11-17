import { Fragment } from "react";
import "../../../static/styles/component.css";
import Logo from "../../../static/images/logo.jpg";
import { Link } from "react-router-dom";


function HeaderComponent () {

    const logoStyle = {
        width: "50%",
        height: "auto"
    };

    return <Fragment>
        <header className="headerConvert">
            <div className="img">
                <img src={Logo} style={logoStyle}></img>
            </div>
            <nav className="headerConvert__menu">
                <Link to="/">Главная</Link>
                <Link to="/convert">Конвертация</Link>
                <Link to="/compress">Сжатие</Link>
                <Link to="/profile">Профиль</Link>
            </nav>
            
        </header>
    </Fragment>
}


export default HeaderComponent;