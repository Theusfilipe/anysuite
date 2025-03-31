import { getTranslation } from "../../../../packages/i18n/src/getTranslation";

const lang = "pt";

export default function Personel() {
    return <h1>{getTranslation(lang, "personelControl")}</h1>;
}