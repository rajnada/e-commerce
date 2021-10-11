import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Papa from "papaparse"
import { uploadOrders } from "redux/action/uploadCsv";
import "./uploadcsv.css"
const UploadCSV = () => {

  const dispatch = useDispatch()
  const [csvFile, setCsvFile] = useState("")

  const handleSubmit = () => {
    // console.log('submit =>');
    // Papa.parse(csvFile, {
    //   complete: updateData,
    //   header: true
    // });
    // 
    dispatch(uploadOrders(csvFile))
  }

  const updateData = (result) => {
    var data = result.data
  }

  const handleFile = (e) => {
    setCsvFile(e.target.files[0])
  }
  // console.log('csvFile =>', csvFile);
  return (
    <>
      <input type="file" onChange={(e) => handleFile(e)} id="file" />
      <label for="file" >Choose a file</label>
      <button type="button" class="upload-btn" onClick={handleSubmit}>Button</button>
    </>
  )
};

export default UploadCSV;
