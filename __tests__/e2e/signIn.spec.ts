import { test, expect } from '@playwright/test'

test.describe('Sign In Page', () => {
  test('should url is /auth/sign-in', async ({ page }) => {
    await page.goto('/auth/sign-in')
    await expect(page).toHaveURL('/auth/sign-in')
  })

  test('should redirect to home page when success sign in', async ({ page }) => {
    await page.goto('/auth/sign-in')
    await page.getByTestId('btnLoginId').click()
    await page.waitForURL('/')
    await expect(page).not.toHaveURL('/auth/sign-in')
  })
})