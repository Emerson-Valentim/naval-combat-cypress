describe("delete user", () => {
  it("provides an existing id and receive success", () => {

    cy.createUser().then((createResponse) => {
      cy.deleteUser({
        data: {
          CD_ID: createResponse?.body?.value?.cdId,
        },
      }).then((deleteResponse) => {
        expect(deleteResponse.status).eq(200);
        expect(deleteResponse.body.value).eq("Usuario apagado com sucesso");
      });
    });
  });

  describe("provides an inexistent id", () => {

    it("and fails", () => {
      cy.deleteUser({
        data: {
          CD_ID: "any-id-that-doesn't-exist"
        }
      }).then((response) => {
        const stringifiedErrors = JSON.stringify(response.body.errors);

        expect(response.status).not.eq(200);
        expect(stringifiedErrors).eq(JSON.stringify({
          "CD_ID": [
            "The value 'any-id-that-doesn't-exist' is not valid."
          ]
        }));
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
      cy.createUser().then((createResponse) => {
        cy.deleteUser({
          data: {
            DeLogin: createResponse.body?.value?.deLogin,
          },
        }).then(() => {
          cy.deleteUser({
            data: {
              CdId: createResponse.body?.value?.deLogin
            }
          }).then((deleteResponse) => {
            const stringifiedErrors = JSON.stringify(deleteResponse.body.errors);

            cy.log(JSON.stringify(deleteResponse.body));
            expect(deleteResponse.status).not.eq(200);
            expect(stringifiedErrors).not.eq(JSON.stringify({
              "CD_ID": [
                `The value '${createResponse.body?.value?.cdId}' is not valid.`
              ]
            }));
          });
        });
      });
    });
  });
});
