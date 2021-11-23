const { assert } = require("chai");
const selenium = require('selenium-webdriver');
const AxeWebdriverJS = require('@axe-core/webdriverjs');


describe('Abcd Tech Spec', () => {
  let driver;

 before(async () => {
  driver = await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
  axeDriver = await new AxeWebdriverJS(driver);
});

after(async () => {
  await driver.quit();
});
 
it('is accessible', async () => {
  await driver.get('http://abcdcomputech.dequecloud.com');
  const results = await axeDriver.analyze();
  assert(results.violations.length === 0, "More than zero a11y violations");
});


});

