import { test, expect } from "@playwright/test";

/* на сайте присутствует капча, тест сделать проблематично */
test("Авторизация", async ({page}) => {
    await page.goto("https://www.sima-land.ru/");
    await page.locator('#page-header > div > div.KbnDR > div > div.AAy5s > nav > div:nth-child(2) > a').click();
    await expect(page.locator('form > h3')).toHaveText('Вход');
    await page.getByTestId('login-field').getByTestId('text-field:field').fill('qa_test@test.ru');
    await page.getByTestId('password-field').getByTestId('text-field:field').fill('qa_test');
    await page.getByTestId('button').click();
    await expect(page.locator('#page-header > div > div.KbnDR > div > div.AAy5s > nav > div:nth-child(2) > a')).toHaveText('Профиль'); 
});