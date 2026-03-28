import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when no authorization header is provided", () => {
    const key = getAPIKey({});
    expect(key).toBeNull();
  });

  test("returns null when authorization header is empty", () => {
    const key = getAPIKey({ authorization: "" });
    expect(key).toBeNull();
  });

  test("returns null when scheme is not ApiKey", () => {
    const key = getAPIKey({ authorization: "Bearer some-token" });
    expect(key).toBeNull();
  });

  test("returns null when header has no key after scheme", () => {
    const key = getAPIKey({ authorization: "ApiKey" });
    expect(key).toBeNull();
  });

  test("returns the API key when header is valid", () => {
    const key = getAPIKey({ authorization: "ApiKey my-secret-key" });
    expect(key).toBe("my-secret-key");
  });

  test("returns the correct key value as a string", () => {
    const key = getAPIKey({ authorization: "ApiKey abc123" });
    expect(typeof key).toBe("string");
    expect(key).toBe("abc123");
  });
});
