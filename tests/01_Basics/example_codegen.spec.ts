import { test, expect } from '@playwright/test';
import 'dotenv/config';

// Credentials live in .env (gitignored) — never hardcode them in a public repo.
function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} must be set in .env (see .env.example)`);
  }
  return value;
}

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(env('TTA_USER'));
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(env('TTA_PASS'));
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(500);
});
