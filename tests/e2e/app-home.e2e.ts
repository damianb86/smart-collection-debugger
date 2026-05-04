import { expect, test } from "@playwright/test";

test("opens visual preview for Smart Collection Debugger", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Smart Collection Debugger" })).toBeVisible();
  await expect(page.getByText("Explain why a product matches or misses an automated collection.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
