/// <reference types="cypress" />

declare namespace Cypress {
  interface RequestInput {
    data?: any;
    options?: Partial<Omit<Cypress.RequestOptions, "url" | "body" | "method">>;
  }
  interface Chainable {
    setCache(key: string, value: string): Promise<"OK">;
    getCache<P>(key: string): Promise<P>;

    createUser(config?: RequestInput): Chainable<Response<any>>;

    deleteUser(config?: RequestInput): Chainable<Response<any>>;

    getUser(config?: RequestInput): Chainable<Response<any>>;

    createProfilePicture(config: RequestInput): Chainable<Response<any>>;

    deleteProfilePicture(config: RequestInput): Chainable<Response<any>>;

    getProfilePicture(config: RequestInput): Chainable<Response<any>>;
  }
}
