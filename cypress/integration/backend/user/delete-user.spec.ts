describe("delete user", () => {
  it("provides an existing id and receive success", () => {
    const userId = new Date().valueOf();

    cy.createUser({
      data: {
        CdId: userId,
      },
    }).then(() => {
      cy.deleteUser({
        data: {
          CdId: userId,
        },
      }).then((response) => {
        expect(response.status).eq(200);
        expect(response.body).eq("Usuario apagado com sucesso");
      });
    });
  });

  describe("provides an inexistent id", () => {

    it("and fails", () => {
      cy.deleteUser({
        data: {
          CdId: "any-username-that-doesn't-exist"
        }
      }).then((response) => {
        expect(response.status).not.eq(200);
        expect(response.body).not.eq("");
      });
    });
  });

  describe("provides a deleted id", () => {
    it("and fails", () => {
      cy.deleteUser({
        data: {
          CdId: "any-username-that-doesn't-exist"
        }
      }).then((response) => {
        expect(response.status).not.eq(200);
        expect(response.body).not.eq("");
      });
    });
  });

  describe("provides a null id", () => {
    it("and fails", () => {
      const userId = new Date().valueOf();

      cy.createUser({
        data: {
          CdId: userId,
        },
      }).then(() => {
        cy.deleteUser({
          data: {
            CdId: userId,
          },
        }).then(() => {
          cy.deleteUser({
            data: {
              CdId: userId
            }
          }).then((response) => {
            expect(response.status).not.eq(200);
            expect(response.body).not.eq("");
          });
        });
      });
    });
  });
});
