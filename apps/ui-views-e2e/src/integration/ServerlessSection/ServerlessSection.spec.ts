describe("views: ServerlessSection component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=serverlesssection--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to ServerlessSection!")
  })
})
