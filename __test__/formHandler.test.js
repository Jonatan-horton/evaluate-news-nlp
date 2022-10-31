import { handleSubmit } from "../src/client/js/formHandler";

describe("test handleSubmit polarity", () => {
  test("should return true", () => {
    const handleSubmit_tag = "P+" || "P";
    expect(handleSubmit(handleSubmit_tag)).toBe("Positive");
  });
  test("should return true", () => {
    const handleSubmit_tag = "NEU";
    expect(handleSubmit(handleSubmit_tag)).toBe("Neutral");
  });
  test("should return true", () => {
    const handleSubmit_tag = "N+" || "N";
    expect(handleSubmit(handleSubmit_tag)).toBe("Negative");
  });
  test("should return true", () => {
    const handleSubmit_tag = "NONE";
    expect(handleSubmit(handleSubmit_tag)).toBe("Non Sentimental");
  });
});