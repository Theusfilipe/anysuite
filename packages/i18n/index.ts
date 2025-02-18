import newServiceRequest from "../../apps/web/app/maintenance/newServiceRequest/page";

const translations = {
    en: {
      maintenance: "Maintenance",
      stockroom: "Stockroom",
      welcome: "Welcome to the Company",

      maintenanceWelcome: "Welcome to the Maintenance Dashboard",

      serviceRequestList: "Service Request List",
      newServiceRequest: "New Service Request",

      newServiceOrder: "New Service Order",
      serviceOrderList: "Service Order List",

      return:"Return",
    },
    pt: {
      maintenance: "Manutenção",
      stockroom: "Almoxarifado",
      welcome: "Bem-vindo à empresa",

      maintenanceWelcome: "Bem-vindo ao Painel de Manutenção",

      serviceRequestList: "Listagem de solicitações de serviço",
      newServiceRequest: "Nova solicitação de serviço",

      newServiceOrder: "Nova ordem de serviço",
      serviceOrderList: "Listagem de ordens de serviço",

      return:"Retornar",
    },
  };
  
  export type Language = "en" | "pt";
  
  export const getTranslation = (lang: Language, key: keyof typeof translations.en) => {
    return translations[lang][key] || key;
  };