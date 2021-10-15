describe("Valiadte the upload file functionality", () => {
  it("Upload file in cypress", () => {
    cy.visit("http://automationpractice.com/index.php?controller=contact");
    const fixturePath = "uploadFile.jpg";
    cy.get("#fileUpload").attachFile(fixturePath);
  });
  it("Upload a file in cypress ex2", () => {
    cy.visit("http://www.webdriveruniversity.com/File-Upload/index.html");
    const fixturePath = "uploadFile.jpg";
    cy.get("#myFile").attachFile(fixturePath);
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("Your file has now been uploaded!");
    });
  });
  it("Upload a file in cypress ex2", () => {
    cy.visit("http://www.webdriveruniversity.com/File-Upload/index.html");
    const fixturePath = "uploadFile.jpg";
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("You need to select a file to upload!");
    });
  });
  it("Changing the file name when uploading", () => {
    cy.visit("https://www.igniteui.com/file-upload/multiple-upload");
    const fixturePath = "uploadFile.jpg";
    cy.get("#igUpload1_ibb_fp").attachFile({
      filePath: fixturePath,
      filename: "NewFile.png",
    });
  });
  it("Uploading multipal files", () => {
    cy.visit("https://www.igniteui.com/file-upload/multiple-upload");
    const fixturePath = "uploadFile.jpg";
    cy.get("#igUpload1_ibb_fp").attachFile([fixturePath, fixturePath]);
  });
});
