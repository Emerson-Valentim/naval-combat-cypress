import { generateUsername } from "unique-username-generator";

const CREATE_USER_URL = `${Cypress.env(
  "SERVER_BASE_URL"
)}/User/CadastrarUser`;

export const createUser = (data) => {

  return {
    url: CREATE_USER_URL,
    method: "POST",
    body: {
      // CdId: new Date().valueOf(),
      DeLogin: generateUsername(),
      DeSenha: "password",
      DeNome: "anyname",
      CdIdFotoPerfil: "0",
      CdPontosCaptao: "0",
      FlPremium: true,
      CdQtdCreditos: 27250,
      FlAdmin: false,
      ...data
    }
  };
};