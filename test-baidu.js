const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.baidu.com', { timeout: 30000 });
    const title = await page.title();
    console.log('Page title:', title);
    console.log('Page URL:', page.url());
    console.log('TEST PASSED: Successfully visited Baidu!');
  } catch (e) {
    console.error('TEST FAILED:', e.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();