import { ExampleClass } from "../pages/example";
import * as helper from "../helpers/helper";

describe("Google Search", () => {
  it("should search for sepcified text", async () => {
    await browser.url("https://www.google.com");
    await (await helper.getWebElement(ExampleClass.searchInput)).setValue("Webdriver IO Search Example");
    await browser.keys("Enter");
    await expect(await (await helper.getWebElement(ExampleClass.firstResult)).getText()).toContain(
      "Selectors | WebdriverIO",
    );
    console.log(browser);
  });
});
