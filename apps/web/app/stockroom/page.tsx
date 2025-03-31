import { getTranslation } from "../../../../packages/i18n/src/getTranslation";

const lang = "pt";

export default function Stockroom() {
    return <h1>{getTranslation(lang,"stockroom")}</h1>;
  }