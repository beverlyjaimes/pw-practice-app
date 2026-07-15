import {test} from '@playwright/test'

// test.beforeAll(() => {

// })

test.beforeEach(async ({page}) => {
      await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()

})
// test('the first test', async ({page}) => {
  
//     await page.getByText('Form Layouts').click()
// })

// test('navigate to datepicker', async ({page}) => {
   
//     await page.getByText('Datepicker').click()
// })

//try to avoid is not considered good practice 
// test.afterAll()
// test.afterEach()

test.describe('suite 1', () => {
    test.beforeEach(async ({page}) => {
    await page.getByText('Forms').click()

})
test('the first test1', async ({page}) => {
  
    await page.getByText('Form Layouts').click()
})


})

test.describe.only('suite 2', () => {
    test.beforeEach(async ({page}) => {
    await page.getByText('Charts').click()

})
test('the first test2', async ({page}) => {
  
    await page.getByText('Echarts').click()
})

// test('navigate to datepicker', async ({page}) => {
   
//     await page.getByText('Datepicker').click()
// })
})