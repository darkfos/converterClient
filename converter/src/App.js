import { Fragment } from "react";
import HeaderComponent from "./core/components/header/HeaderComponent";
import MainBanner1 from "./static/images/main_baner-1.png";
import MainBanner2 from "./static/images/main_baner-2.png";
import "./static/styles/component.css";
import CustomBtn from "./core/widgets/customBtn/CustomBtn";


function App() {
  const styleImg = {
    position: "absolute",
    width: "95%",
    height: "60vh",
    borderRadius: "40px",
    transition: "width 3s ease-in-out",
    "z-index": 92838
  };

  const spanStyle = {
    color: "#f79273",
    fontWeight: "bold",
  };

  const styleButtonContacts = {
    border: "2.5px solid #5d3f90",
    borderRadius: "20px",
    width: "100%",
    padding: "20px",
    "background-color": "white",
    fontSize: "2.1vh",
    transition: "all 0.4s ease-in-out .1s",
  };

  const styleButtonContactsTwo = {};
  
  Object.assign(styleButtonContactsTwo, styleButtonContacts);
  styleButtonContactsTwo["border"] = "2.5px solid #b886ba";

  return <Fragment>
    <HeaderComponent />
    <main className="mainBody">
      <h3 className="mainBody__h3">Добро пожаловать на <b style={spanStyle}>Converter</b>! &#128075;</h3>
      <img src={MainBanner1} style={styleImg} onMouseEnter={(e) => {
        if (e.target.style.width == "55%") {
            e.target.style.width = "95%";
        } else {
          e.target.style.width = "55%";
        }
      }}/>
      <img src={MainBanner2} className="mainBody__banner2"/>
      <div className="mainBody__btns">
        <CustomBtn text="Контакты" style={styleButtonContacts} do_e="" on_hover="padding: 25px; border: 2.7px solid #f2754c"/>
        <CustomBtn text="Исходники" style={styleButtonContactsTwo} do_e="" on_hover="padding: 30px; border: 2.7px solid #f2754c"/>
      </div>
    </main>
  </Fragment>
}


export default App;