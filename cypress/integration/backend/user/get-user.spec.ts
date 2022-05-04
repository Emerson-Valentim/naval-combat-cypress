describe("get user", () => {
  it("provides an existing id and receive user data", () => {
    const login = `user-login-${new Date().valueOf()}`;
    const password = "user-password";

    cy.createUser({
      data: {
        DeLogin: login,
        DeSenha: password
      }
    }).then(() => {
      cy.getUser({
        data: {
          DE_LOGIN: login,
          DE_SENHA: password
        }
      }).then((response) => {
        expect(response.status).eq(200);

        expect(response.body?.value?.deLogin).eq(login);
      });
    });
  });

  describe("provides an inexistent id", () => {
    it("and fails", () => {
      cy.getUser({
        data: {
          CdId: "any-username-that-doesn't-exist"
        }
      }).then((response) => {
        expect(response.status).eq(200);
        expect(response.body?.value).eq(null);
      });
    });
  });
});