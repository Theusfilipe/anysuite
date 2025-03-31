import { getTranslation } from "@repo/i18n/getTranslation";

const lang = "pt";

export default function Stockroom() {
    return <h1>{getTranslation(lang,"stockroom")}</h1>;
  }