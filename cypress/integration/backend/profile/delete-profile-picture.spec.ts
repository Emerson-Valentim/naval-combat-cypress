describe("remove profile picture", () => {
  it("provides all parameters and receive success", () => {
    cy.createUser().then((createResponse) => {
      cy.createProfilePicture({
        data: {
          CdIdUsuario: createResponse.body?.value?.cdId,
        },
      }).then((createProfilePictureResponse) => {
        cy.deleteProfilePicture({
          data: {
            CD_ID_FOTO_PERFIL: createProfilePictureResponse.body?.value?.Id,
          },
        });
      });
    });
  });

  describe("deletes same image two times", () => {
    it("and fails", () => {});
  });

  describe("provides inexistent image", () => {
    it("and fails", () => {});
  });
});
