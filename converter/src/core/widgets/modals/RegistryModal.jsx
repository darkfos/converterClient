import ReactModal from "react-modal";
import { Fragment, useState } from "react";
import "../../../static/styles/modals.css";
import Logo from "../../../static/images/logo.jpg";
import { CustomInput } from "../inputs/FormInput";
import CustomBtn from "../customBtn/CustomBtn";
import AuthAPIService from "../../auth/AuthService";

// Auth
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../../store/authSlice";


function RegistryModal({isClosed, otherState}) {

    const [modal, setModalState] = useState(isClosed);
    const [userEmail, setEmail] = useState(null);
    const [userPassword, setPassword] = useState(null);
    const [userName, setName] = useState(null);

    function closeModal() {
        setModalState(false);
        otherState("auth");
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
                await AuthAPIService.loginUser(userEmail, userPassword);
            }
        }
    }

    return <Fragment>
            <ReactModal isOpen={modal} className="modalAuthMenu" style={{"width": "100%", "margin": "auto"}}>
                <div className="modalAuthMenu__body">
                    <header className="modalAuthMenuBody__header">
                        <img src={Logo} />
                    <h2 className="modalAuthMenuBody__h2">Регистрация</h2>
                    </header>
                    <CustomInput type="email" placeholder="Ваша электронная почта" classN="inputField" on_ch={setEmail}/>
                    <CustomInput type="password" placeholder="Секретный пароль: secret001" classN="inputField" on_ch={setPassword}/>
                    <CustomInput type="text" placeholder="Ваш псевдоним: batman222" classN="inputField" on_ch={setName}/>
                    <div className="modalAuthMenuR__buttons">
                        <CustomBtn text="Зарегистрироваться" do_e="" on_hover="" classN="authButton" idU="btn2"/>
                    </div>
                    <button onClick={closeModal} className="closeModal">&times;</button>
                    <div className="errorMessage" id="errorMes">
                        <button onClick={(e) => {document.getElementById("errorMes").style.visibility = "hidden"}} className="closeModalTwo">&times;</button>
                        <p>Вы ввели некорректный пароль: допустимая длина более <span style={{color: "#12116a", fontWeight: "bold"}}>8 символов</span></p>
                    </div>
                </div>
            </ReactModal>
    </Fragment>
}


export default RegistryModal;