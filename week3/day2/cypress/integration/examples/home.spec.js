describe('Restaurant tests', () => {
    it('finds the restaurant website', () => {
      cy.visit('http://localhost:3000');
    })

    it('opens the Add Restaurant page', () => {
        cy.visit('http://localhost:3000');

        // search for the DOM element by content 
        // and then call 'click'
        cy.get('a[href*="form"]').click();
      })

      it('home page contains correct restaurants', () => {
        cy.visit('http://localhost:3000');
        cy.get('body')
  .should('contain', 'Bayroot')
  .and('contain', 'Berkley')
  .and('contain', 'Balthazar')
  .and('contain', 'Berners')
  .and('contain', 'Blanchette')
  .and('contain', 'Ricard')
  .and('contain', 'Monico')
  .and('contain', 'Impact')
      })
  })