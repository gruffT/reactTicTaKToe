describe('Tic Tak Toe', function () {
    it('should visit default page', function() {
        cy.visit('/');

        cy.get('.status')
            .should('have.text', 'Next player: X');

        cy.get('.reset').click();

        cy.get('.status')
            .should('have.text', 'Next player: X');

        cy.get('.square').as('squares')
            .should('have.length', 9);
    });

    it('should set a square by clicking on it which can\'t then be changed, updating status', function () {
        cy.visit('/');

        cy.get('.square').as('squares').first()
            .click()
            .should('have.text', 'X')
            .click()
            .should('have.text', 'X');

        cy.get('.status')
            .should('have.text', 'Next player: O');

        cy.get('@squares').eq(3)
            .click()
            .should('have.text', 'O')
            .click()
            .should('have.text', 'O');

        cy.get('.status')
            .should('have.text', 'Next player: X');
    });

    it('should play a winning game for X', function () {
        cy.visit('/');

        cy.get('.square').as('squares')
            .first().click();
        cy.get('@squares').eq(3).click();
        cy.get('@squares').eq(1).click();
        cy.get('@squares').eq(4).click();
        cy.get('@squares').eq(2).click();

        cy.get('.status')
            .should('have.text', 'Winner X');

        cy.get('.reset').click();

        cy.get('.status')
            .should('have.text', 'Next player: X');
        cy.get('@squares').eq(0)
            .should('have.text', '');
    });

    it('should play a winning game for O', function () {
        cy.visit('/');

        cy.get('.square').as('squares')
            .first().click();

        cy.get('@squares').eq(2).click();
        cy.get('@squares').eq(1).click();
        cy.get('@squares').eq(5).click();
        cy.get('@squares').eq(6).click();
        cy.get('@squares').eq(8).click();

        cy.get('.status')
            .should('have.text', 'Winner O');
    });

    it('should play a tied game', function () {
        cy.visit('/');

        cy.get('.square').as('squares')
            .first().click();
        cy.get('@squares').eq(3).click();
        cy.get('@squares').eq(4).click();
        cy.get('@squares').eq(7).click();
        cy.get('@squares').eq(1).click();
        cy.get('@squares').eq(2).click();
        cy.get('@squares').eq(5).click();
        cy.get('@squares').eq(8).click();
        cy.get('@squares').eq(6).click();

        cy.get('.status')
            .should('have.text', 'Tie');
    });

});