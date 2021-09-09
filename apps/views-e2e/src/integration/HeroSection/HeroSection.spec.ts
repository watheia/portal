describe("views: HeroSection component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=herosection--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to HeroSection!")
  })
})
