import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";
import ProfileAnonimAvatar from "../../static/images/profile_anonim_avatar.png";
import CustomBtn from "../widgets/customBtn/CustomBtn";


function ProfilePage() {
    
    let arraysSymbols = ["🐴", "🦉", "🐒", "🐍", "🐶", "🐱"];
    
    const profileLeaveBtn = {
        backgroundColor: "#e31788",
        color: "white",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "10px",
        width: "60%",
        margin: "auto",
        border: "none"
    };

    const profileHistoryBtn = Object.assign({}, profileLeaveBtn);
    profileHistoryBtn.backgroundColor = "#a19ae7";

    return <Fragment>
        <HeaderComponent on_active="profile"/>
        <div className="mainBody">
        <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Profile}</span>
        <br />
        <br />
        <h3 className="mainBody__h3">Мой уголок   {arraysSymbols[Math.ceil(Math.random() * arraysSymbols.length-1)]}</h3>
        <div className="profileBody">
            <div className="profileBody__left">
                <img src={ProfileAnonimAvatar}/>
                <p>Имя пользователя</p>
                <div className="profileLeft__btns">
                    <CustomBtn text="История" style={profileHistoryBtn} do_e = "" on_hover = "" classN = "" idU = ""/>
                    <CustomBtn text="Выйти" style={profileLeaveBtn} do_e = "" on_hover = "" classN = "" idU = ""/>
                </div>
            </div>
            <div className="profileBody__right">
                <p><span className="profileMenuItem">Электронная почта:</span> </p>
                <p><span className="profileMenuItem">Пользовательское имя:</span> </p>
                <p><span className="profileMenuItem">Дата регистрации:</span> </p>
            </div>
        </div>
        </div>
    </Fragment>
}


export default ProfilePage;