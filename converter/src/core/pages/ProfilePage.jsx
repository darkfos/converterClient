import { Fragment, useEffect, useState } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";
import ProfileAnonimAvatar from "../../static/images/profile_anonim_avatar.png";
import CustomBtn from "../widgets/customBtn/CustomBtn";
import OtherAPIService from "../auth/OtherApiService";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, setAccessToken, setRefreshToken } from "../../store/authSlice";


function ProfilePage() {
    
    const [userData, setUserData] = useState(null);
    const selData = useSelector(state => state.AuthReducer);
    const [profileAvatar, setProfileAvatar] = useState(null);
    const disp = useDispatch();

    let arraysSymbols = ["🐴", "🦉", "🐒", "🐍", "🐶", "🐱"];
    
    const profileLeaveBtn = {
        backgroundColor: "#e31788",
        color: "white",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "10px",
        width: "60%",
        margin: "auto",
        border: "none",
        transition: "all 0.8s ease-in-out"
    };

    const profileAvatarBtn = {
        backgroundColor: "#efc06d",
        borderRadius: "10px",
        padding: "20px",
        color: "black",
        fontWeight: "600",
        transition: "all 0.8s ease-in-out",
    };

    const profilePasswordBtn = {
        backgroundColor: "#1751a1",
        borderRadius: "10px",
        padding: "20px",
        color: "white",
        fontWeight: "600",
        transition: "all 0.8s ease-in-out",
    };

    const profileHistoryBtn = Object.assign({}, profileLeaveBtn);
    profileHistoryBtn.backgroundColor = "#a19ae7";

    useEffect(
        () => {
            OtherAPIService.getProfileData(selData["Access-Token"]).then((message) => {
                setUserData(message);
                OtherAPIService.getProfileFoto(selData["Access-Token"]).then((m) => {
                    setProfileAvatar(m.image);
                }).catch((e) => {})
            }).catch((error) => {
            })

        }, []
    );

    const leavePage = () => {
        document.cookie = "access_token=; Max-Age=-1;"; // Access Token
        document.cookie = "refresh_token=; Max-Age=-1;"; // Access Token
        disp(setAccessToken(null));
        disp(setRefreshToken(null));
        document.location.reload();
    }

    if (userData) {
        return (
            <Fragment>
                <HeaderComponent on_active="profile"/>
                <div className="mainBody">
                <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Profile}</span>
                <br />
                <br />
                <h3 className="mainBody__h3">Мой уголок   {arraysSymbols[Math.ceil(Math.random() * arraysSymbols.length-1)]}</h3>
                <div className="profileBody">
                    <div className="profileBody__left">
                        <img src={profileAvatar ? profileAvatar : ProfileAnonimAvatar}/>
                        <p>{userData.username}</p>
                        <div className="profileLeft__btns">
                            <CustomBtn text="История" style={profileHistoryBtn} do_e = "" on_hover = "padding: 20px" classN = "" idU = ""/>
                            <CustomBtn text="Выйти" style={profileLeaveBtn} do_e = {leavePage} on_hover = "padding: 20px" classN = "" idU = ""/>
                        </div>
                    </div>
                    <div className="profileBody__right">
                        <div className="profileMenuItem">
                            <p>Электронная почта: <span className="userData">{userData.email}</span></p>
                        </div>
                        <div className="profileMenuItem">
                            <p>Пользовательское имя: <span className="userData">{userData.username}</span></p>
                        </div>
                        <div className="profileMenuItem">
                            <p>Дата регистрации: <span className="userData">{userData.date_reg}</span></p>
                        </div>
                        <hr />
                        <div className="profileSettings">
                            <CustomBtn text="Сменить аватар" style={profileAvatarBtn} do_e = "" on_hover = "padding: 30px" classN = "" idU = ""/>
                            <CustomBtn text="Сменить пароль" style={profilePasswordBtn} do_e = "" on_hover = "padding: 30px" classN = "" idU = ""/>
                        </div>
                    </div>
                </div>
                </div>
            </Fragment>
            )
        }

    return (
        <Fragment>
            <HeaderComponent on_active="profile"/>
        </Fragment>
    )
}


export default ProfilePage;