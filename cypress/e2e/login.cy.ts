describe("Login workflow", () => {
  it("logs in a user successfully", () => {
    cy.visit("/")

    cy.get('[data-cy="email-input"]').type("testuser@example.com")
    cy.get('[data-cy="password-input"]').type("Password123!")
    cy.get('[data-cy="login-button"]').click()

    cy.url().should("include", "/todo")

    cy.contains("My Tasks").should("be.visible")
  })
})
