import { getTranslation } from "@repo/i18n/getTranslation";

const lang = "pt";

export default function Personel() {
    return <h1>{getTranslation(lang, "personelControl")}</h1>;
}