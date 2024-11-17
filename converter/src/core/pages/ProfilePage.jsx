import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";


function ProfilePage() {
    
    let arraysSymbols = ["🐴", "🦉", "🐒", "🐍", "🐶", "🐱"];

    return <Fragment>
        <HeaderComponent />
        <div className="mainBody">
            <span className="dopInfo">{PagesEnums.Profile}</span>
            <br />
            <br />
            <h3 className="mainBody__h3">Страница профиля   {arraysSymbols[Math.ceil(Math.random() * arraysSymbols.length-1)]}</h3>
        </div>
    </Fragment>
}


export default ProfilePage;