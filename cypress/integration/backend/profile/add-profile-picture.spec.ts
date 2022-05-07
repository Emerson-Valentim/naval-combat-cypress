describe("add profile picture", () => {
  it("provides all parameters and receive success", () => {
    cy.createUser().then((createResponse) => {
      cy.createProfilePicture({
        data: {
          CdIdUsuario: createResponse.body?.value?.cdId,
        },
      }).then((createProfilePictureResponse) => {
        expect(createProfilePictureResponse.status).eq(200);
      });
    });
  });

  describe("creates two images for same user", () => {
    it("and fails", () => {
      cy.createUser().then((createResponse) => {
        cy.createProfilePicture({
          data: {
            CdIdUsuario: createResponse.body?.value?.cdId,
          },
        }).then(() => {
          cy.createProfilePicture({
            data: {
              CdIdUsuario: createResponse.body?.value?.cdId,
            },
          }).then((createProfilePictureResponse) => {
            expect(createProfilePictureResponse.status).not.eq(200);
          });
        });
      });
    });
  });

  describe("provides inexistent CdIdUsuario", () => {
    it("and fails", () => {
      cy.createProfilePicture({
        data: {
          CdIdUsuario: "any-username-that-doesn't-exist",
        },
      }).then((createProfilePictureResponse) => {
        //cy.log(JSON.stringify(createProfilePictureResponse.body));
        expect(createProfilePictureResponse.status).not.eq(200);
      });
    });
  });
});
