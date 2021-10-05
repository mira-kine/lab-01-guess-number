
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contain kim phone', ()=>{
            cy.get('#kim-phone').should('be.visible');
            cy.get('#play-button').click();
            cy.get('#reset-button').click();
        });
    });
});