
import { getTranslation } from "./../../../../../packages/i18n/index";

const lang = "pt";

export default function EmployeeList() {
  return (
    <span>
        {getTranslation(lang, "addNewEmployee")}
    </span>
  );
}