import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import "../../static/styles/component.css";
import { PagesEnums } from "../en/js_en";


function ConvertPage() {
    return <Fragment>
        <HeaderComponent on_active="convert"/>
        <div className="mainBody">
        <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Convert}</span>
        <p>Convert page</p>
        </div>
    </Fragment>
}


export default ConvertPage;