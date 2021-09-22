describe("navigator: SessionCtxNav component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=principalnav--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to PrincipalNav!")
  })
})
