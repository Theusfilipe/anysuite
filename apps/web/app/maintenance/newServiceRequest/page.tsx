"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";

import { useState } from "react";

//import Link from "next/link";

const lang = "pt";



  export default function newServiceRequest() {
    const [formData, setFormData] = useState({
      base: "",
      location: "",
      equipmentName: "",
      problemDescription: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Aqui você pode enviar os dados do formulário para um servidor ou armazená-los
      console.log(formData);
    };
  
    return (
      <div style={pageStyle}>
        <h2>{getTranslation(lang, "newServiceRequest")}</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="base">{getTranslation(lang, "baseWhereEquipmentIsLocated")}</label>
            <select
              name="base"
              id="base"
              value={formData.base}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">{getTranslation(lang, "selectBase")}</option>
              <option value="base1">Base 1</option>
              <option value="base2">Base 2</option>
              <option value="base3">Base 3</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
  
          <div style={inputContainerStyle}>
            <label htmlFor="location">{getTranslation(lang, "locationOfEquipment")+":"}</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
  
          <div style={inputContainerStyle}>
            <label htmlFor="equipmentName">{getTranslation(lang, "nameOfEquipment")+":"}</label>
            <input
              type="text"
              id="equipmentName"
              name="equipmentName"
              value={formData.equipmentName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
  
          <div style={inputContainerStyle}>
            <label htmlFor="problemDescription">{getTranslation(lang, "textOfProblem")+":"}</label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              style={textareaStyle}
            />
          </div>
  
          <button type="submit" style={submitButtonStyle}>{getTranslation(lang, "createRequest")}</button>
        </form>
      </div>
    );
  }
  import { CSSProperties } from "react";

  const pageStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };
  
 

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
    gap: "15px",
  };
  
  const inputContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  
  const inputStyle: CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  };
  
  const textareaStyle: CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    minHeight: "100px",
  };
  
  const submitButtonStyle: CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };