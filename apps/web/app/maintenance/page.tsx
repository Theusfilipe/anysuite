import { getTranslation } from "@repo/i18n/getTranslation";

const lang = "pt";

export default function Maintenance() {
    return <h1>{getTranslation(lang, "maintenanceWelcome")}</h1>;
}