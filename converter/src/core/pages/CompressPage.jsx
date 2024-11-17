import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";


function CompressPage() {
    return <Fragment>
        <HeaderComponent />
        <div className="mainBody">
            <span className="dopInfo">{PagesEnums.Compres}</span>
            <p>Compress page</p>
        </div>
    </Fragment>
}


export default CompressPage;