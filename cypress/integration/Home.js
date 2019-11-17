context("/", () => {
  beforeEach(() => {
    cy.visit("http://todomvc.com/examples/vue/");
  });
  it("adds 2 todos", function() {
    cy.get(".new-todo")
      .type("learn testing{enter}")
      .type("be cool{enter}");
    cy.get(".todo-list li").should("have.length", 2);
  });
});
