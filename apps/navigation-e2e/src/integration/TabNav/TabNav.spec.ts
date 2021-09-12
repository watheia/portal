describe('navigation: TabNav component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tabnav--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TabNav!');
    });
});
