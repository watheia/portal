describe("views: Gatekeeper component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=gatekeeper--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to Gatekeeper!")
  })
})
