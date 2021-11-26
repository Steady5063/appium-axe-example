const { assert } = require("chai");
const selenium = require('selenium-webdriver');
const AxeWebdriverJS = require('@axe-core/webdriverjs');

//Test spec for the original space jam 1996 website.
describe('Space Jam 1996', () => {
  let driver;

  //This can be set to any desired capabiltie including Android/Chrome etc.
  let desiredCaps = {
    'automationName': 'xcuitest',
    'platformName' : 'iOS',
    'platformVersion' : '12.4',
    'deviceName' : 'iPhone 12 Pro Max', 
    'udid' : '78AE3521-165F-46F8-B08A-9F42546DFE57',
    'browserName' : 'Safari'
  };

  let localServer = "http://localhost:4723/wd/hub"

 before(async () => {
  driver = await new selenium.Builder().usingServer("http://localhost:4723/wd/hub")
            .withCapabilities(desiredCaps).build();
  axeDriver = await new AxeWebdriverJS(driver);
});

after(async () => {
  await driver.quit();
});
 
//Test case that checks the accessibility of the site
it('is accessible', async () => {
  await driver.get('https://www.spacejam.com/1996/');
  const axeResults = await axeDriver.analyze();
  assert(axeResults.violations.length === 0, "More than zero a11y violations");
});


});

