# Playwright Fundamentals 3X

A learning project for mastering [Playwright](https://playwright.dev/) test automation fundamentals with TypeScript.

## Overview

This repository contains beginner-to-intermediate Playwright examples covering core concepts such as:

- Writing and running end-to-end tests
- Using **Codegen** (`npx playwright codegen`) to generate tests
- Working with locators and roles
- Handling multiple elements and filtering
- Filling forms and interacting with web apps

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

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

Run tests headed (visible browser):

```bash
npx playwright test --headed
```

Open the last HTML report:

```bash
npx playwright show-report
```

Generate a test with Codegen:

```bash
npx playwright codegen
```

## Project Structure

```
├── tests/                    # Test files
│   ├── example.spec.ts       # Basic title assertion example
│   └── example_codegen.spec.ts # Test generated via Codegen
├── playwright.config.ts      # Playwright configuration
├── package.json              # Dependencies and scripts
└── README.md
```

## Test Examples

### `example.spec.ts`

Navigates to the Playwright website and verifies the page title contains "Playwright".

### `example_codegen.spec.ts`

A test generated with `npx playwright codegen` against
[The Testing Academy's practice app](https://app.thetestingacademy.com/playwright/multiple_element_filter).
It logs in with an email/password and filters multiple elements.

> **Note:** Credentials in the codegen test are hardcoded. For real projects, store secrets in
> environment variables or a `.env` file instead.

## License

MIT
