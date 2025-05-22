import { getTranslation } from "@repo/i18n/getTranslation";
import { prisma } from "@repo/db";
const lang = "pt";

export default async function Maintenance() {

    

    return <h1>{getTranslation(lang, "maintenanceWelcome")}</h1>;
}