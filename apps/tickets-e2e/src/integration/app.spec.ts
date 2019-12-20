import { getTickets, getAddTicketButton} from '../support/app.po';

describe('tickets', () => {
  beforeEach(() => cy.visit('/'));

  it('should display tickets', () => {
    getTickets().should(t => {
      expect('t.length').equal(2);
    });

    getAddTicketButton().click();

    getTickets().should(t => {
      expect('t.length').equal(3);
    });
  })
})
