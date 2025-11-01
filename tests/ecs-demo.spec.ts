import { test, expect } from '@playwright/test';

test('ECS Fargate – Playwright runs in container', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});