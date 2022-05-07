import { generateUsername } from "unique-username-generator";

const BASE_URL = Cypress.env("SERVER_BASE_URL");

export const createSkin = (data) => {
  return {
    url: `${BASE_URL}/Skins/CadastrarSkin`,
    method: "POST",
    failOnStatusCode: false,
    body: {
      DeNomeSkin: generateUsername(),
      CdValorSkin: 100,
      DtUltimaAtualizacao: new Date().toISOString(),
      ...data,
    },
  };
};

export const deleteSkin = (data) => {
  return {
    url: `${BASE_URL}/Skins/ApagarSkin`,
    method: "DELETE",
    failOnStatusCode: false,
    qs: {
      CD_ID_SKIN: new Date().valueOf(),
      ...data,
    },
  };
};

export const getSkin = (data) => {
  return {
    url: `${BASE_URL}/Skins/ConsultarSkin`,
    method: "GET",
    failOnStatusCode: false,
    qs: {
      CD_ID_SKIN: 1,
      ...data,
    },
  };
};

export const createScenarioSkin = (data) => {
  return {
    url: `${BASE_URL}/SkinDataCenario/CadastrarSkin`,
    method: "POST",
    failOnStatusCode: false,
    body: {
      CdIdSkin: 1,
      DeDataSkin: "Skin data",
      ...data,
    },
  };
};

export const deleteScenarioSkin = (data) => {
  return {
    url: `${BASE_URL}/SkinDataCenario/ApagarSkin`,
    method: "DELETE",
    failOnStatusCode: false,
    qs: {
      CD_ID_SKIN: 1,
      ...data,
    },
  };
};

export const getScenarioSkin = (data) => {
  return {
    url: `${BASE_URL}/SkinDataCenario/ConsultarSkin`,
    method: "GET",
    failOnStatusCode: false,
    qs: {
      CD_ID_SKIN: 1,
      ...data,
    },
  };
};
