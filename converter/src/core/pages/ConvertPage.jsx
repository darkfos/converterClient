import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import "../../static/styles/component.css";
import { PagesEnums } from "../en/js_en";
import { CustomInput } from "../widgets/inputs/FormInput";
import { convertFileData } from "../en/convert_en";
import { useState } from "react";
import CustomBtn from "../widgets/customBtn/CustomBtn";


function ConvertPage() {

    const [file, setField] = useState(null);
    const [option, setOption] = useState(null);

    return <Fragment>
        <HeaderComponent on_active="convert"/>
        <div className="mainBody">
            <span className="dopInfo"><span className="spanBlock">#</span>  {PagesEnums.Convert}</span>
            <br />
            <br />
            <h3 className="mainBody__h3">Конвертация файлов</h3>
            <div className="convertBody">
                <div className="convertBody__files">
                    <p className="convertBody__selectTypeFile">Выберите ваш тип файла</p>
                    <select onChange={(e) => {setOption(e.target.value);}}>
                        {Object.keys(convertFileData).map((el) => {
                            return <option id="item">{convertFileData[el]}</option>;
                        })}
                    </select>
                    <label class="input-file">
                        <CustomInput type="file" classN="inputFile" on_ch={setField} sel={option}/>
                        <span>Выберите файл</span>
                    </label>
                </div>
                <CustomBtn text="Конвертировать" style={{}} do_e="" on_hover="" classN="btnToConvert" idU="convert"/>
            </div>
        </div>
    </Fragment>
}


export default ConvertPage;