describe("navigator: MobileNav component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=mobilenav--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to MobileNav!")
  })
})
