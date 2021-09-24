describe("views: CtaSection component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=ctasection--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to CtaSection!")
  })
})
