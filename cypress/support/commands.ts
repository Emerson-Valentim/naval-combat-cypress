import Cache from "../fixtures/storage/cache";
import { createUser } from "../fixtures/payloads/user";

const cache = Cache();

Cypress.Commands.add("setCache", cache.set);
Cypress.Commands.add("getCache", async (key) => {
  const result = await cache.get(key);

  try {
    return JSON.stringify(result);
  } catch {
    return result;
  }
});

Cypress.Commands.add("createUser", (config) => {
  const payload = createUser(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});
