import { generateUsername } from "unique-username-generator";

const buildBody = (data = {}) => ({
  DeLogin: generateUsername(),
  DeSenha: "password",
  DeNome: "anyname",
  CdIdFotoPerfil: "0",
  CdPontosCaptao: "0",
  FlPremium: true,
  CdQtdCreditos: 27250,
  FlAdmin: false,
  ...data,
});

describe("create user", () => {
  const CREATE_USER_URL = `${Cypress.env(
    "SERVER_BASE_URL"
  )}/User/CadastrarUser`;

  it("provides all parameters and receive success", () => {
    cy.request({
      url: CREATE_USER_URL,
      method: "POST",
      body: buildBody(),
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).eq("Dados salvos com sucesso!");
    });
  });

  describe("and fail", () => {
    it("provides no parameters", () => {
      cy.request({
        url: CREATE_USER_URL,
        method: "POST",
        body: {},
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).not.eq(200);

        const stringifiedErrors = JSON.stringify(response.body.errors);

        expect(stringifiedErrors).equals(
          JSON.stringify({
            DeNome: ["The DeNome field is required."],
            DeLogin: ["The DeLogin field is required."],
            DeSenha: ["The DeSenha field is required."],
            FlAdmin: ["The FlAdmin field is required."],
            FlPremium: ["The FlPremium field is required."],
            CdQtdCreditos: ["The CdQtdCreditos field is required."],
            CdIdFotoPerfil: ["The CdIdFotoPerfil field is required."],
            CdPontosCaptao: ["The CdPontosCaptao field is required."],
          })
        );
      });
    });

    it("omits CdQtdCreditos", () => {
      cy.request({
        url: CREATE_USER_URL,
        method: "POST",
        body: buildBody({
          CdQtdCreditos: undefined,
        }),
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).not.eq(200);

        const stringifiedErrors = JSON.stringify(response.body.errors);

        expect(stringifiedErrors).equals(
          JSON.stringify({
            CdQtdCreditos: ["The CdQtdCreditos field is required."],
          })
        );
      });
    });

    it("provides existing username and receive error", () => {
      const initialBody = buildBody();

      cy.request({
        url: CREATE_USER_URL,
        method: "POST",
        body: initialBody,
        failOnStatusCode: false,
      }).then(() => {
        cy.request({
          url: CREATE_USER_URL,
          method: "POST",
          body: initialBody,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.body.detail).eq("Usuario ja cadastrado na base de dados!",);
        });
      });
    });
  });
});
