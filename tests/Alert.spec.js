import { test, expect } from '@playwright/test'
test('Alert Functionality', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.once('dialog', async (dialog) => {
        console.log("Alert Handled:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@onclick="alertbox()"]').click()

    await page.locator('(//a[@class="analystic"])[2]').click()

    await page.once('dialog', async (dialog) => {
        console.log("Confirm Alert :", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@onclick="confirmbox()"]').click()

    await page.locator('//a[text()="Alert with Textbox "]').click()

    await page.once("dialog", async (dialog) => {
        console.log("Prompt Alert:", dialog.message())
        console.log("Default prompt:", dialog.defaultValue())
        await dialog.accept('manish')
    })

    await page.locator('//button[@onclick="promptbox()"]').click()

    const promptmessage = await page.locator('//p[@id="demo1"]')
    const txt = await promptmessage.textContent()
    await expect(txt).toContain('manish')
})