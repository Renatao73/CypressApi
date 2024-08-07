class elements {
    btnMenu = () => cy.get('#gnt-burger')
    btnAjuda = () => cy.get(':nth-child(3) > .gnt-nav-label-depth1')
    textJaSouCliente = () => cy.get('.active > .gnt-nav-menu-depth2 > :nth-child(1) > .gnt-nav-label')
    textCentralMetropolitana = () => cy.get('#menu-ajuda-sou-cliente-capitais > .gnt-nav-link-text > .gnt-nav-link-title')
    textDemaisLocalidades = () => cy.get('#menu-ajuda-sou-cliente-demais-localidades > .gnt-nav-link-text > .gnt-nav-link-title')
    btnCentralAjuda = () => cy.get('#menu-ajuda-sou-cliente-central-ajuda')
    campoPesquisa = () => cy.get('#faq-search-input')
    btnConcluiNegocicao = () => cy.get('[href="https://site.getnet.com.br/duvidas/solucao-de-dividas/?modal_open=692"] > .c-search-dropdown-link__item > .c-search-dropdown-link__title')
    modalDuvida = () => cy.get('.is-modal-open')
    textModalDuvida = () => cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
}

export default elements
