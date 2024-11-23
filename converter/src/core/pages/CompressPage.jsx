import { Fragment, useState } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { PagesEnums } from "../en/js_en";
import CustomBtn from "../widgets/customBtn/CustomBtn";
import { CustomInput } from "../widgets/inputs/FormInput";
import OtherAPIService from "../auth/OtherApiService";
import { useSelector } from "react-redux";


function CompressPage() {

    const [file, setField] = useState(null);
    const selector = useSelector(state => state.AuthReducer);

    let onCompressFile = async () => {
        let fileData = new FormData();
        let file = document.getElementById("PDF").files[0];
        fileData.append("file", file);
        let req = await OtherAPIService.compressUserFile(selector["Access-Token"], fileData);
        
        if (req) {
            
            const blobData = new Blob([req.data], {type: "application/pdf"});
            let bodyDiv = document.querySelector(".convertBtns");
            let newBtn = document.createElement("a");
            newBtn.textContent = "Скачать";
            newBtn.className = "btnToDownload";
            newBtn.href = URL.createObjectURL(blobData);
            newBtn.download = "your_new_file.pdf";
            newBtn.id = Math.random();
            
            bodyDiv.appendChild(newBtn);

            setTimeout(() => {
                newBtn.remove();
            }, 20_000);
        } else {
            console.log("Не удалось сжать файл");
        }
    }

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
                <div className="convertBtns">
                    <CustomBtn text="Конвертировать" style={{}} do_e={onCompressFile} on_hover="" classN="btnToConvert" idU="convert"/>
                </div>
            </div>
        </div>
    </Fragment>
}


export default CompressPage;