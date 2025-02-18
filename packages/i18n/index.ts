import newServiceRequest from "../../apps/web/app/maintenance/newServiceRequest/page";

const translations = {
    en: {
      maintenance: "Maintenance",
      stockroom: "Stockroom",
      welcome: "Welcome to the Company",

      maintenanceWelcome: "Welcome to the Maintenance Dashboard",

      serviceRequestList: "Service Request List",

      newServiceRequest: "New Service Request",
      // Below are the form data for "New Service Request",
      baseWhereEquipmentIsLocated: "Base where equipment is located",
      selectBase: "Select a base",
      locationOfEquipment: "Location of equipment",
      nameOfEquipment: "Name of equipment",
      textOfProblem: "Text of the problem",
      createRequest: "Create Request",

      editServiceOrder: "Edit Service Order",


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

      // Abaixo dados do formulário de "Nova solicitação de serviço",
      baseWhereEquipmentIsLocated: "Base onde o equipamento se encontra",
      selectBase: "Selecione uma base",
      locationOfEquipment: "Localização do equipamento",
      nameOfEquipment: "Nome do equipamento",
      textOfProblem: "Texto do problema",
      createRequest: "Criar solicitação",

      editServiceOrder: "Editar ordem de serviço",

      newServiceOrder: "Nova ordem de serviço",
      serviceOrderList: "Listagem de ordens de serviço",

      return:"Retornar",
    },
  };
  
  export type Language = "en" | "pt";
  
  export const getTranslation = (lang: Language, key: keyof typeof translations.en) => {
    return translations[lang][key] || key;
  };