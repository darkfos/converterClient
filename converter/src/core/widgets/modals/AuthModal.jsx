import ReactModal from "react-modal";
import { Fragment, useState } from "react";
import "../../../static/styles/modals.css";
import Logo from "../../../static/images/logo.jpg";
import { CustomInput } from "../inputs/FormInput";
import CustomBtn from "../customBtn/CustomBtn";
import AuthAPIService from "../../auth/AuthService";
import RegistryModal from "./RegistryModal";

// Auth
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../../store/authSlice";


function AuthModal({isClosed}) {

    const [modal, setModalState] = useState(isClosed);
    const [userEmail, setEmail] = useState(null);
    const [userPassword, setPassword] = useState(null);
    const [authModal, setModal] = useState("auth");

    const state = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    function closeModal() {
        setModalState(false);
    }

    function loginUser() {

        if (userPassword === null || userPassword.length < 8) {

            let btn = document.getElementById("btn1");
            let btn2 = document.getElementById("btn2");
            let errorBlock = document.getElementById("errorMes");

            btn.classList.add("shake");
            btn2.classList.add("shake");
            errorBlock.style.visibility = "visible";

            setTimeout(() => {
                btn.classList.remove("shake");
                btn2.classList.remove("shake");
            }, 1200);

        } else {
            let req = async () => {

                let newFormData = new FormData();

                newFormData.append("username", userEmail);
                newFormData.append("password", userPassword);

                let result = await AuthAPIService.loginUser(newFormData);

                if (result) {

                    dispatch(setAccessToken(result.access_token));
                    dispatch(setRefreshToken(result.refresh_token));
                    

                    // Установка cookie
                    document.cookie = `access_token=${result.access_token}; SameSite=None; Secure; path=/`;
                    document.cookie = `refresh_token=${result.refresh_token}; SameSite=None; Secure; path=/`;

                    // Очистка localStorage
                    localStorage.clear();
                    closeModal();
                    window.location.reload();
                } else {
                    let body = document.querySelector(".modalAuthMenu__body");
                    const errorMessage = document.createElement("p");
                    errorMessage.textContent = "Данный пользователь не существует!";
                    errorMessage.className = "errorAuthMessage";
                    errorMessage.onclick = (e) => {
                        e.target.remove();
                    }
                    body.appendChild(
                        errorMessage
                    );
                }
            }

            req();
        }
    }

    function regUser() {
        return setModal("registry");
    }

    if (authModal === "auth") {
        return (
            <Fragment>
                    <ReactModal isOpen={modal} className="modalAuthMenu">
                        <div className="modalAuthMenu__body">
                            <header className="modalAuthMenuBody__header">
                                <img src={Logo} />
                            <h2 className="modalAuthMenuBody__h2">Авторизация</h2>
                            </header>
                            <CustomInput type="email" placeholder="Ваша электронная почта" classN="inputField" on_ch={setEmail}/>
                            <CustomInput type="password" placeholder="Секретный пароль: secret001" classN="inputField" on_ch={setPassword}/>
                            <div className="modalAuthMenu__buttons">
                                <CustomBtn text="Войти" do_e={loginUser} on_hover="" classN="authButton" idU="btn1"/>
                                <CustomBtn text="Регистрация" do_e={regUser} on_hover="" classN="authButton" idU="btn2"/>
                            </div>
                            <button onClick={closeModal} className="closeModal">&times;</button>
                            <div className="errorMessage" id="errorMes">
                                <button onClick={(e) => {document.getElementById("errorMes").style.visibility = "hidden"}} className="closeModalTwo">&times;</button>
                                <p>Вы ввели некорректный пароль: допустимая длина более <span style={{color: "#12116a", fontWeight: "bold"}}>8 символов</span></p>
                            </div>
                        </div>
                    </ReactModal>
            </Fragment>
        )
    } else {
        return <RegistryModal isClosed={true} otherState={setModal}/>
    }
}


export default AuthModal;