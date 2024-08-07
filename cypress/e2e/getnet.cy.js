
import CentralDeAjudaPage from '../fixtures/getNetPage'
const centralDeAjudaPage = new CentralDeAjudaPage()

describe('Prova Frontend - Getnet', () => {
    before(() => {
        centralDeAjudaPage.visitPagina()
    })
   
   
    it('Deve buscar a palavra-chave e verificar a modal', () => {
        centralDeAjudaPage.fluxoAjuda()
        
      
        
    })

    afterEach(() => {
        
        cy.screenshot('final-state')

    })
})
