const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium } = require("playwright");
setDefaultTimeout(60000);

BeforeAll(async function () {
   global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        viewport:{
            width: 1500, 
            height: 800
        }
   });
   
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});
 
AfterAll(async function () {
   await global.page.close();
   await global.context.close();
   await global.browser.close();
});
