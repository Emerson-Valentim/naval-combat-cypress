const BASE_URL = Cypress.env("SERVER_BASE_URL");

export const createMatch = (data) => {
  return {
    url: `${BASE_URL}/HistoricoPartida/CadastrarPartida`,
    method: "POST",
    failOnStatusCode: false,
    body: {
      CdIdPartida: 0,
      CdIdJogadorA: 0,
      CdIdJogadorB: 0,
      CdIdVencedor: 0,
      DtDataPartida: new Date().toISOString(),
      ...data,
    },
  };
};

export const deleteMatch = (data) => {
  return {
    url: `${BASE_URL}/HistoricoPartida/DeletarHistorico`,
    method: "DELETE",
    failOnStatusCode: false,
    qs: {
      CD_ID_PARTIDA: 0,
      ...data,
    },
  };
};

export const getMatch = (data) => {
  return {
    url: `${BASE_URL}/HistoricoPartida/ConsultarPartida`,
    method: "GET",
    failOnStatusCode: false,
    qs: {
      CD_ID_PARTIDA: 0,
      ...data,
    },
  };
};
