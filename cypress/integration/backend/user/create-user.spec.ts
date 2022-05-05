describe("create user", () => {
  it("provides all parameters and receive success", () => {
    const username = `random-username-${new Date().valueOf()}`;

    cy.createUser({
      data: {
        DeLogin: username,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body?.value?.deLogin).eq(username);
    });
  });

  describe("provides no parameters", () => {
    it("and fail", () => {
      cy.createUser({
        data: {
          DeLogin: null,
          DeSenha: null,
          DeNome: null,
          CdIdFotoPerfil: null,
          CdPontosCaptao: null,
          FlPremium: null,
          CdQtdCreditos: null,
          FlAdmin: null,
        },
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
  });

  describe("omits CdQtdCreditos", () => {
    it("and fail", () => {
      cy.createUser({
        data: { CdQtdCreditos: undefined },
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
  });

  describe("provides existing username", () => {
    it("and fail", () => {
      const username = `same-username-${new Date().valueOf()}`;

      cy.createUser({
        data: {
          DeLogin: username,
        },
      }).then(() => {
        cy.createUser({
          data: {
            DeLogin: username,
          },
        }).then((response) => {
          expect(response.status).eq(409);

          expect(response.body.value).eq(
            "Usuario ja cadastrado na base de dados!"
          );
        });
      });
    });
  });
});
