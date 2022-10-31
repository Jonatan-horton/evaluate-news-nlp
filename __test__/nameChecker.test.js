import { nameChecker } from "../src/client/js/nameChecker.js";

describe("with url protocol", () => {
  test("should return true", () => {
    const input = "https://www.google.com";
    expect(nameChecker
    (input)).toBe(true);
  });
  test("should return true", () => {
    const input = "http://www.google.com";
    expect(nameChecker
    (input)).toBe(true);
  });
});

describe("without protocol", () => {
  test("should return true", () => {
    const input = "www.google.com";
    expect(nameChecker
    (input)).toBe(false);
  });
  test("should return true", () => {
    const input = "google.com";
    expect(nameChecker
    (input)).toBe(false);
  });
  test("should return false", () => {
    const input = "google . co";
    expect(nameChecker
    (input)).toBe(false);
  });
});