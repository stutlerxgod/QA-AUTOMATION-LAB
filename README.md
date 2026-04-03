# QA Automation Lab

[![CI](https://github.com/stutlerxgod/QA-AUTOMATION-LAB/actions/workflows/ci.yml/badge.svg)](https://github.com/stutlerxgod/QA-AUTOMATION-LAB/actions/workflows/ci.yml)

End-to-end test automation suite for [automationexercise.com](https://automationexercise.com) — a practice e-commerce platform.

## Stack

| Layer | Tools |
|-------|-------|
| UI Tests | Playwright + Cucumber.js (BDD) |
| API Tests | Postman + Newman |
| Language | TypeScript |
| Architecture | Page Object Model |
| Containerization | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Code Quality | Prettier |

## Project Structure
```
apps/
  ui-tests/
    features/       # Gherkin scenarios
    steps/          # Step definitions
    pages/          # Page Object Model classes
    hooks/          # Before/After hooks, World
    fixtures/       # Test data & cookie state
    utils/          # Cookie setup script
    reports/        # HTML reports (generated)
    traces/         # Playwright traces (generated)
  api-tests/
    collections/    # Postman collections
    environments/   # Environment configs
    reports/        # Newman reports (generated)
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker (optional)

### Install dependencies
```bash
npm install
```

### Setup environment
```bash
cp .env.example .env
```
Then fill in `DEFAULT_PASSWORD` in the created file.

### Setup API environment
```bash
cp apps/api-tests/environments/prod.env.json.example apps/api-tests/environments/prod.env.json
```
Then fill in `base_url`, `email`, and `emailPassword` in the created file.

### Generate cookie state
```bash
npm run setup:cookie
```

## Running Tests

### UI Tests
```bash
# headless
npm run test:ui

# headed single scenario with slow motion
npm run test:ui-headed

# headed recorded trace for debugging
npm run test:ui-tracing
```

### API Tests
```bash
npm run test:api
```

## Docker
```bash
# build image
npm run docker:build

# run ui tests
npm run docker:test:ui

# run api tests
npm run docker:test:api

# run all tests
npm run docker:run
```

## Code Formatting

```bash
# fix formatting
npm run format

# check formatting (used in CI)
npm run format:check
```

## CI/CD

GitHub Actions runs automatically on every push and pull request to `main`:
- **lint** — checks code formatting with Prettier
- **ui-tests** — runs UI tests in Docker
- **api-tests** — runs API tests with Newman

Reports are uploaded as artifacts after each run.

## Reports

After running tests, open:
- UI: `apps/ui-tests/reports/cucumber-report.html`
- API: `apps/api-tests/reports/report.html`
