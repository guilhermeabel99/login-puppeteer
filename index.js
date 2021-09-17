require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/');

  // Acessa página de login

  await page.type('#email', 'guilhermeabel777@gmail.com');
  // await page.type('#pass', 'gpeuvisteste@100');

  await page.click('[type="submit"]')
  
})();