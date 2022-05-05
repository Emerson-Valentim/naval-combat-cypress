import { generateUsername } from "unique-username-generator";

const BASE_URL = Cypress.env("SERVER_BASE_URL");

export const createUser = (data) => {
  return {
    url: `${BASE_URL}/User/CadastrarUser`,
    method: "POST",
    failOnStatusCode: false,
    body: {
      DeLogin: generateUsername(),
      DeSenha: "password",
      DeNome: "anyname",
      CdIdFotoPerfil: "0",
      CdPontosCaptao: "0",
      FlPremium: true,
      CdQtdCreditos: 27250,
      FlAdmin: false,
      ...data,
    },
  };
};

export const deleteUser = (data) => {
  return {
    url: `${BASE_URL}/User/ApagarUsuario`,
    method: "DELETE",
    failOnStatusCode: false,
    qs: {
      CD_ID: new Date().valueOf(),
      ...data,
    },
  };
};

export const getUser = (data) => {
  return {
    url: `${BASE_URL}/User/ConsultarUser`,
    method: "GET",
    failOnStatusCode: false,
    qs: {
      DE_LOGIN: generateUsername(),
      DE_SENHA: "password",
      ...data,
    },
  };
};
