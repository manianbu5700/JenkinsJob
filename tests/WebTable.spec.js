import {test} from '@playwright/test'
test('Login functionality', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
   const tabledata= await page.locator('//table[@id="table02"]/tbody/tr[1]/td[1]')
   const txt=await tabledata.textContent()
   console.log("Text Conten:",txt)

   const alldata=await page.locator('//table[@id="table02"]/tbody/tr[1]/td')
   const data=await alldata.allTextContents()
   console.log('All Data from row:',data)

   const alltext=await page.locator('//table[@id="table02"]/tbody/tr/td[1]')
   const alt=await alltext.allTextContents()
   console.log("All text from column:",alt)
    
})