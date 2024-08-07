import elements from './elements'
const jaSouCliente = 'Já sou cliente Get'
const textoCentralMetropolitana = 'Capitais e regiões metropolitanas'
const textoDemaisLocalidades = 'Demais localidades'
const preencherTextoBoletos = 'Boleto'
const textDuvidaModal = 'Eu concluí a negociação, de que forma receberei meu boleto?'
const url = 'https://site.getnet.com.br/'

class CentralDeAjudaPage {
   
    
    constructor() {
        this.elements = new elements()
    }
   
   
    visitPagina() {
        cy.visit('/')
    }

    navigateToCentralDeAjuda() {
        this.elements.btnMenu().click()
        this.elements.btnAjuda().click()
    }

    validarTextosCentralDeAjuda() {
        this.elements.textJaSouCliente().contains(jaSouCliente)
        this.elements.textCentralMetropolitana().contains(textoCentralMetropolitana)
        this.elements.textDemaisLocalidades().contains(textoDemaisLocalidades)
    }

    clicarCentralDeAjuda(){
        this.elements.btnCentralAjuda().click()
    }

    preencherCampoAjudaPesquisa(){
        this.elements.campoPesquisa().type(preencherTextoBoletos)
    }

    clicarBtnConcluirNegociacao(){
        this.elements.btnConcluiNegocicao().click()
    }

    validarModal(){
        this.elements.modalDuvida().should('be.visible')
    }

    validarTextoDuvida() {
        this.elements.textModalDuvida().contains(textDuvidaModal)
    }

    fluxoAjuda() {
        this.navigateToCentralDeAjuda()
        this.validarTextosCentralDeAjuda()
        this.clicarCentralDeAjuda()
        this.preencherCampoAjudaPesquisa()
        this.clicarBtnConcluirNegociacao()
        this.validarModal()
        this.validarTextoDuvida()
    }

   
}

export default CentralDeAjudaPage
