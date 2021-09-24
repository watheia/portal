describe("views: TestimonialSection component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=testimonialsection--primary"))

  it("should render the component", () => {
    cy.get("h1").should("contain", "Welcome to TestimonialSection!")
  })
})
