const { createMocks } = require("node-mocks-http");
import job from "./jobs";

describe("/api/jobs", () => {
  test("returns if successful", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await job(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
  test("returns if return value", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await job(req, res);
    expect(JSON.parse(res._getData())).toBeTruthy();
  });
});
