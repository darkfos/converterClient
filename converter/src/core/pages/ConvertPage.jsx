import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import "../../static/styles/component.css";
import { PagesEnums } from "../en/js_en";


function ConvertPage() {
    return <Fragment>
        <HeaderComponent />
        <div className="mainBody">
            <span className="dopInfo">{PagesEnums.Convert}</span>
            <p>Convert page</p>
        </div>
    </Fragment>
}


export default ConvertPage;