/// <reference types="cypress" />

declare namespace Cypress {

  interface Chainable {
    setCache(key: string, value: string): Promise<"OK">;
    getCache<P>(key: string): Promise<P>;

    createUser(config?: {
      data?: any;
      options?: Partial<
        Omit<Cypress.RequestOptions, "url" | "body" | "method">
      >;
    }): any;
  }
}
