import { test } from '@playwright/test'
test('Login Dropdown', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Frames.html")
    const selectedFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await selectedFrame.locator("//input[@type='text']").fill('manish')
    await page.waitForTimeout(6000)
    await page.locator('(//a[@class="analystic"])[2]').click()

    const OuterFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const InnerFrame = await OuterFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await InnerFrame.locator('//input[@type="text"]').fill('Harish')
    await page.waitForTimeout(6000)


})