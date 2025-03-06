export const handleLeftZeros = (e: any) => {
    let value = e.target.value;
    if (value === "0") {
      value = "";
    }
    
    //setFormData((prevData) => ({
    //  ...prevData,
    //  weight: value,
    //}));
  };