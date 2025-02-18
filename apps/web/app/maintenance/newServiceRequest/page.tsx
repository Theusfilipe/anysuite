import { getTranslation } from "./../../../../../packages/i18n/index";

//import Link from "next/link";

const lang = "pt";



export default function newServiceRequest() {
    return <h2>{getTranslation(lang, "newServiceRequest")}</h2>;
  }
  