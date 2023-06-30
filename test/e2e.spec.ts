import { test } from '@playwright/test';

const apiBaseUrl = 'http://localhost:3001'

test.beforeEach(async ({ context }) => {
    await context.route(`${apiBaseUrl}/users/available-agents`, async route => {
        await route.fulfill({ json:  [{ id: 1, name: 'Alexa' }] });
    });
    await context.route(`${apiBaseUrl}/topics`, async route => {
        const mockData = [{ id: 1, name: 'Football', children: [
            { id: 2, name: 'Seria A', children: [
                { id: 3, name: 'Inter', children: [] }
            ] }
        ] }]
        await route.fulfill({ json: mockData });
    });
});

test('Simple flow', async ({ page: screen }) => {
    await screen.goto('http://localhost:3000/');
    await screen.getByRole('button', { name: 'Chat Now' }).click();
    await screen.locator('h3').filter({ hasText: /^Chat support$/ }).waitFor({ state: 'visible' })
    await screen.locator('p').filter({ hasText: /^Connecting to agent...$/ }).waitFor({ state: 'visible' })
    await screen.locator('h3').filter({ hasText: /^Chat with Alexa$/ }).waitFor({ state: 'visible' })
    await screen.locator('div').filter({ hasText: /^Football$/ }).click();
    await screen.locator('div').filter({ hasText: /^Seria A$/ }).click();
    await screen.locator('div').filter({ hasText: /^Inter$/ }).click();
    await screen.locator('span').filter({ hasText: /^Thank you for your answers$/ }).waitFor({ state: 'visible' })
    await screen.getByRole('button', { name: '×' }).click();
});