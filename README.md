# Playwright Fundamentals 3X

A learning project for mastering [Playwright](https://playwright.dev/) test automation fundamentals with TypeScript.

## Overview

This repository contains beginner-to-intermediate Playwright examples covering core concepts such as:

- Writing and running end-to-end tests
- Browser / Context / Page isolation (BCP)
- Test annotations (`skip`, `only`, `fail`, `fixme`, `slow`) and `describe` blocks
- Locators, `getByRole` queries and navigation options (`waitUntil`, `referer`, `timeout`)
- Reusing an authenticated session with `storageState`

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (bundled with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ashishpant2244/Playwright_Fundamental_3X.git
cd Playwright_Fundamental_3X
npm install
```

Install the required browsers (first time only):

```bash
npx playwright install
```

## Configuration (`.env`)

Some tests log in to real sites, so credentials are kept out of the source code.
Copy the example file and fill in your own credentials:

```bash
cp .env.example .env
```

| Variable   | Used by                                          | Description                    |
| ---------- | ------------------------------------------------ | ------------------------------ |
| `VWO_USER` | `tests/04_Session_Storage/231_SessionStorage.ts` | VWO / Wingify login email      |
| `VWO_PASS` | `tests/04_Session_Storage/231_SessionStorage.ts` | VWO / Wingify login password   |
| `TTA_USER` | `tests/01_Basics/example_codegen.spec.ts`        | The Testing Academy login email |
| `TTA_PASS` | `tests/01_Basics/example_codegen.spec.ts`        | The Testing Academy password   |

> **Note:** The real `.env` and the saved `user-session.json` are gitignored. Never commit them.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single folder or file:

```bash
npx playwright test tests/01_Basics
npx playwright test tests/04_Session_Storage/232_TestWingify.spec.ts
```

Run tests headed (visible browser):

```bash
npx playwright test --headed
```

Run tests whose title matches a string:

```bash
npx playwright test -g "Login Page"
```

Open the last HTML report:

```bash
npx playwright show-report
```

Generate a test with Codegen:

```bash
npx playwright codegen
```

## Session Storage Workflow

`tests/04_Session_Storage/` demonstrates logging in once and reusing the session
instead of logging in for every test.

1. **Save a session** (opens a headed browser, logs in, writes `user-session.json`):

   ```bash
   npx tsx tests/04_Session_Storage/231_SessionStorage.ts
   ```

2. **Reuse it** — `232_TestWingify.spec.ts` loads `user-session.json` via
   `test.use({ storageState: './user-session.json' })` and jumps straight to the
   dashboard with no login step:

   ```bash
   npx playwright test tests/04_Session_Storage/232_TestWingify.spec.ts
   ```

## Commit & Push in One Command

A small helper does `git add -A`, commits and pushes:

```bash
# with a message
npm run go -- "feat: add session storage tests"

# without a message (falls back to a default)
npm run go
```

## Project Structure

```
├── tests/
│   ├── 01_Basics/                  # BCP, test options, first tests & codegen
│   ├── 02_TestAnnotations/         # skip / only / fail / fixme / slow, describe
│   ├── 03_Locator_Commands/        # locators, getByRole, navigation options
│   └── 04_Session_Storage/         # storageState-based session reuse
├── scripts/
│   └── go.mjs                      # "npm run go" commit + push helper
├── .env.example                    # Template for local credentials
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Dependencies and scripts
└── README.md
```

## Test Examples

### `tests/01_Basics/`

- `example.spec.ts` — navigates to the Playwright site and verifies the title.
- `example_codegen.spec.ts` — generated with `npx playwright codegen`; logs in to
  [The Testing Academy practice app](https://app.thetestingacademy.com/playwright/multiple_element_filter)
  using credentials from `.env`.
- `220_BCP.spec.ts` — launches a browser, creates a context and a page, then cleans up.
- `221_TA.spec.ts` — basic navigation and three isolated contexts.
- `222_Test_Options.spec.ts` — context options (viewport, locale, timezone, geolocation) and a mobile context.

### `tests/02_TestAnnotations/`

- `223_TestAnnotations.spec.ts` — `skip`, `only`, `fail`, `fixme` and `slow`.
- `224_TestDescribe.spec.ts` — grouping tests with `test.describe`.

### `tests/03_Locator_Commands/`

- `225_LC.spec.ts` — navigation options (`waitUntil`, `timeout`, `referer`).
- `226_Refere.spec.ts` — context-wide `Referer` header.
- `227_Fresh.spec.ts` — locators and asserting an inline error message.
- `228_Project3.spec.ts` — asserting an invalid-email message on the Wingify free-trial page.
- `229_getByRole.spec.ts`, `230_getByRole.spec.ts` — `getByRole` locators.

### `tests/04_Session_Storage/`

- `231_SessionStorage.ts` — script that logs in and saves `user-session.json`.
- `232_TestWingify.spec.ts` — tests that reuse the saved session.

## License

MIT
