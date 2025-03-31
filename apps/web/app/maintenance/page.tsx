import { getTranslation } from "../../../../packages/i18n/src/getTranslation";

const lang = "pt";

export default function Maintenance() {
    return <h1>{getTranslation(lang, "maintenanceWelcome")}</h1>;
}