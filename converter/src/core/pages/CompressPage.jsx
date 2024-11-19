import { Fragment, useState } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";
import CustomBtn from "../widgets/customBtn/CustomBtn";
import { CustomInput } from "../widgets/inputs/FormInput";


function CompressPage() {
    const [file, setField] = useState(null);

    return <Fragment>
        <HeaderComponent on_active="compress"/>
        <div className="mainBody">
            <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Compres}</span>
            <h3 className="mainBody__h3">Конвертация файлов</h3>
            <div className="convertBody">
                <div className="convertBody__files">
                    <p className="convertBody__selectTypeFile">Загрузите необходимый файл</p>
                    <label class="input-file">
                        <CustomInput type="file" classN="inputFile" on_ch={setField} sel="PDF"/>
                        <span>Выберите файл</span>
                    </label>
                </div>
                <CustomBtn text="Конвертировать" style={{}} do_e="" on_hover="" classN="btnToConvert" idU="convert"/>
            </div>
        </div>
    </Fragment>
}


export default CompressPage;