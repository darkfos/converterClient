import { Fragment } from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import "../../static/styles/component.css";
import { PagesEnums } from "../en/js_en";
import { CustomInput } from "../widgets/inputs/FormInput";
import { convertFileData } from "../en/convert_en";
import { useState } from "react";
import CustomBtn from "../widgets/customBtn/CustomBtn";
import OtherAPIService from "../auth/OtherApiService";
import { useSelector } from "react-redux";


function ConvertPage() {

    const [file, setField] = useState(null);
    const [option, setOption] = useState(convertFileData.pdf);
    const selector = useSelector(state => state.AuthReducer);

    let convertFile = async () => {
        console.log(option);
        let pdfFile = new FormData();

        if (option === convertFileData.pdf) {
            pdfFile.append("file_pdf", file);
            let req = await OtherAPIService.convertUserPDFFileToDocx(selector["Access-Token"], pdfFile, selector["Refresh-Token"]);

            if (req) {
                let bodyConvertPage = document.querySelector(".convertBtns");

                const blobFileData = new Blob([req], {
                    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                });

                let newBtn = document.createElement("a");
                newBtn.textContent = "Скачать";
                newBtn.className = "btnToDownload";
                newBtn.href = URL.createObjectURL(blobFileData);
                newBtn.download = "convert_docx_file.docx"; 
                bodyConvertPage.append(newBtn);

                setTimeout(() => {
                    newBtn.remove();
                }, 7_000);
            }
        } else if (option === convertFileData.docx) {

            let docxFile = new FormData();
            docxFile.append("file_docx", file);

            let req = await OtherAPIService.convertUserDocxFileToPDF(selector["Access-Token"], docxFile, selector["Refresh-Token"]);

            if (req) {
                let bodyConvertPage = document.querySelector(".convertBtns");
                
                let newBtn = document.createElement("a");
                newBtn.textContent = "Скачать";
                newBtn.className = "btnToDownload";
                
                const blobData = new Blob([req], {type: "application/pdf"});
                newBtn.href = URL.createObjectURL(blobData);
                newBtn.download = "convertPdfFile.pdf";
                bodyConvertPage.append(newBtn);

                setTimeout(() => {
                    newBtn.remove();
                }, 7_000);
            }
        }
    }

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
                        <CustomInput type="file" classN="inputFile" on_ch={setField} sel={option} is_conv={true} />
                        <span>Выберите файл</span>
                    </label>
                </div>
                <div className="convertBtns">
                    <CustomBtn text="Конвертировать" style={{}} do_e={convertFile} on_hover="" classN="btnToConvert" idU="convert" />
                </div>
            </div>
        </div>
    </Fragment>
}


export default ConvertPage;