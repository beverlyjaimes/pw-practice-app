import {test} from '@playwright/test'


test.beforeEach(async ({page}) => {
      await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})


test('Locator syntax rules', async({page}) => {
    //by Tag name
   await page.locator('input').first().click()

    //by iD
    // await page.locator('#inputEmail').click()

    //by Class
    page.locator('.shape-rectangle')

    //by attribute 
    page.locator('[placeholder="Email"]')

    //by entire class value(full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine selectors put them together without a space it will look for a match that has all 
    page.locator('input[placeholder="Email"]')

    //by xpath(NOT RECOMMENDED BY PLAYWRIGHT)
    page.locator('//')

    //by partial text match
    page.locator(':text("Using")')

    //by text exact match
    page.locator(':text-is("Using the Grid")')
})