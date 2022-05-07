import Cache from "../fixtures/storage/cache";
import { createUser, deleteUser, getUser } from "../fixtures/payloads/user";
import { createProfilePicture, deleteProfilePicture, getProfilePicture } from "../fixtures/payloads/profile";

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

Cypress.Commands.add("deleteUser", (config) => {
  const payload = deleteUser(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("getUser", (config) => {
  const payload = getUser(config?.data);

  return cy.request({
    ...payload,
    ...config.options,
  });
});

Cypress.Commands.add("createProfilePicture", (config) => {
  const payload = createProfilePicture(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("deleteProfilePicture", (config) => {
  const payload = deleteProfilePicture(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("getProfilePicture", (config) => {
  const payload = getProfilePicture(config?.data);

  return cy.request({
    ...payload,
    ...config.options,
  });
});