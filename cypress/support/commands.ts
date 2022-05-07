import Cache from "../fixtures/storage/cache";
import { createUser, deleteUser, getUser } from "../fixtures/payloads/user";
import {
  createProfilePicture,
  deleteProfilePicture,
  getProfilePicture,
} from "../fixtures/payloads/profile";
import {
  createScenarioSkin,
  createSkin,
  deleteScenarioSkin,
  deleteSkin,
  getScenarioSkin,
  getSkin,
} from "../fixtures/payloads/skin";
import { createMatch, deleteMatch, getMatch } from "../fixtures/payloads/match";

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

Cypress.Commands.add("createSkin", (config) => {
  const payload = createSkin(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("deleteSkin", (config) => {
  const payload = deleteSkin(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("getSkin", (config) => {
  const payload = getSkin(config?.data);

  return cy.request({
    ...payload,
    ...config.options,
  });
});

Cypress.Commands.add("createScenarioSkin", (config) => {
  const payload = createScenarioSkin(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("deleteScenarioSkin", (config) => {
  const payload = deleteScenarioSkin(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("getScenarioSkin", (config) => {
  const payload = getScenarioSkin(config?.data);

  return cy.request({
    ...payload,
    ...config.options,
  });
});

Cypress.Commands.add("createMatch", (config) => {
  const payload = createMatch(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("deleteMatch", (config) => {
  const payload = deleteMatch(config?.data);

  return cy.request({
    ...payload,
    ...config?.options,
  });
});

Cypress.Commands.add("getMatch", (config) => {
  const payload = getMatch(config?.data);

  return cy.request({
    ...payload,
    ...config.options,
  });
});
