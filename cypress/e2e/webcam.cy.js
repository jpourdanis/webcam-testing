describe("A sample to test a webcamera on ci", () => {
  it("should take screenshot of web recording", () => {
    cy.visit("https://webcamtests.com/");
    //wait to detect the camera
    cy.wait(2000);
    cy.get("#webcam-launcher").click();
    cy.get("#webcam-prop_media_name")
      .invoke("text")
      .should("be.eq", "fake_device_0");
    cy.wait(2000);
    cy.get("#webcam-stream").screenshot();
  });
});
