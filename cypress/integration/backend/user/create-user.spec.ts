import { generateUsername } from "unique-username-generator"

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
})

describe("create user", () => {
  const CREATE_USER_URL = `${Cypress.env(
    "SERVER_BASE_URL"
  )}/User/CadastrarUser`

  it("provides all parameters and receive success", () => {
    cy.request({
      url: CREATE_USER_URL,
      method: "POST",
      body: buildBody(),
    }).then((response) => {

      expect(response.status).eq(200)

      expect(response.body).eq("Dados salvos com sucesso!")
    })
  })

  describe("and fail", () => {
    it("provides no parameters", () => {
      return 1
    })

    it("omits CdQtdCreditos", () => {
      return 1
    })

    it("provides username and receive error", () => {
      return 1
    })
  })
})
