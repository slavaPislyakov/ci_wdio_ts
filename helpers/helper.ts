const getWebElement = async (
  elementLocator,
  reverseValue = false,
  timeout = browser.config.mochaOpts.timeout,
): Promise<WebdriverIO.Element> => {
  const webElement = await $(elementLocator);
  await webElement.waitForExist({ timeout: timeout, reverse: reverseValue });

  return webElement;
};

const getTextElement = async (
  elementLocator,
  reverseValue = false,
  timeout = browser.config.mochaOpts.timeout,
): Promise<WebdriverIO.Element> => {
  const webElement = await $(elementLocator);
  await webElement.waitForExist({ timeout: timeout, reverse: reverseValue });

  return webElement;
};

export { getWebElement };
