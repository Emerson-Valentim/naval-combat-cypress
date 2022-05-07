import { image } from "../storage/data.json";

const BASE_URL = Cypress.env("SERVER_BASE_URL");

export const createProfilePicture = (data) => {
  return {
    url: `${BASE_URL}/FotoPerfil/CadastrarFoto`,
    method: "POST",
    failOnStatusCode: false,
    body: {
      CdIdUsuario: 0,
      CdIdFotoPerfil: new Date().valueOf(),
      DsFotoData: image,
      ...data,
    },
  };
};

export const deleteProfilePicture = (data) => {
  return {
    url: `${BASE_URL}/FotoPerfil/ApagarFoto`,
    method: "DELETE",
    failOnStatusCode: false,
    qs: {
      CD_ID_USUARIO: 0,
      ...data,
    },
  };
};

export const getProfilePicture = (data) => {
  return {
    url: `${BASE_URL}/FotoPerfil/ConsultarFoto`,
    method: "GET",
    failOnStatusCode: false,
    qs: {
      CD_ID_FOTO_PERFIL: 0,
      ...data,
    },
  };
};
