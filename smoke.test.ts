import { test, expect } from '@playwright/test'

// Just a _very_ basic check to verify that input + output are working
test('ensure that basic formatting is not broken', async ({ page }) => {
  await page.goto(
    'http://localhost:3000/#N4Igxg9gJgpiBcIAkAXGBnF8AEAnGUA3ADoB28uEEK2w2kANhLjqhiodgL4hdA',
  )

  const output = page.locator('[data-output]')
  await expect(output).toContainText(':root {  color: red;}')
})
