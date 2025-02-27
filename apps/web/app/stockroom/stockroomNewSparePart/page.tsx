
import { getTranslation } from "./../../../../../packages/i18n/index";

const lang = "pt";

export default function StockroomEquipmentList() {
  return (
    <span>
        {getTranslation(lang, "stockroom")}
    </span>
  );
}