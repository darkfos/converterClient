import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";


function CompressPage() {
    return <Fragment>
        <HeaderComponent on_active="compress"/>
        <div className="mainBody">
        <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Compres}</span>
        <p>Compress page</p>
        </div>
    </Fragment>
}


export default CompressPage;