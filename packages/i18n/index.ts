import newServiceRequest from "../../apps/web/app/maintenance/newServiceRequest/page";

const translations = {
    en: {
      maintenance: "Maintenance",
      stockroom: "Stockroom",
      welcome: "Welcome to the Company",

      maintenanceWelcome: "Welcome to the Maintenance Dashboard",

      serviceRequestList: "Service Request List",

      serviceRequest: "Service Request",
      newServiceRequest: "New Service Request",
      // Below are the form data for "New Service Request",
      baseWhereEquipmentIsLocated: "Base where equipment is located",
      selectBase: "Select a base",
      locationOfEquipment: "Location of equipment",
      nameOfEquipment: "Name of equipment",
      textOfProblem: "Text of the problem",
      createRequest: "Create Request",
      serviceName: "Service Name",

      editServiceOrder: "Edit Service Order",

      serviceOrder: "Service Order",
      newServiceOrder: "New Service Order",
      serviceOrderList: "Service Order List",
      equipmentUsed: "Equipment used",
      serviceOrderType: "Service Order Type",
      createServiceOrder: "Create Service Order",
      
      stockroomEquipmentList: "Stockroom Equipment List",
      stockroomNewEquipment: "New Equipment",
      stockroomNewSparePart: "New Spare Part",

      startDate: "Start Date",
      observation: "Observation",
      edit: "Edit",

      return:"Return",
    },
    pt: {
      maintenance: "Manutenção",
      stockroom: "Almoxarifado",
      welcome: "Bem-vindo à empresa",

      maintenanceWelcome: "Bem-vindo ao Painel de Manutenção",

      serviceRequestList: "Lista de solicitações de serviço",
      newServiceRequest: "Nova solicitação de serviço",

      serviceRequest: "Solicitação de serviço",
      // Abaixo dados do formulário de "Nova solicitação de serviço",
      baseWhereEquipmentIsLocated: "Base onde o equipamento se encontra",
      selectBase: "Selecione uma base",
      locationOfEquipment: "Localização do equipamento",
      nameOfEquipment: "Nome do equipamento",
      textOfProblem: "Texto do problema",
      createRequest: "Criar solicitação",
      serviceName: "Nome do serviço",

      serviceOrder: "Ordem de serviço",
      editServiceOrder: "Editar ordem de serviço",

      newServiceOrder: "Nova ordem de serviço",
      serviceOrderList: "Lista de ordens de serviço",
      equipmentUsed: "Equipamentos utilizados",
      serviceOrderType: "Tipo de ordem de serviço",
      createServiceOrder: "Criar ordem de serviço",

      stockroomEquipmentList: "Lista de equipamentos",
      stockroomNewEquipment: "Novo equipamento",
      stockroomNewSparePart: "Nova peça",

      startDate: "Data de início",
      observation: "Observação",
      edit: "Editar",

      return:"Retornar",
    },
  };
  
  export type Language = "en" | "pt";
  
  export const getTranslation = (lang: Language, key: keyof typeof translations.en) => {
    return translations[lang][key] || key;
  };