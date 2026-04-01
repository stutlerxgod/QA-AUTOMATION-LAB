# QA Automation Lab

End-to-end test automation suite for [automationexercise.com](https://automationexercise.com) — a practice e-commerce platform.

## Stack

| Layer | Tools |
|-------|-------|
| UI Tests | Playwright + Cucumber.js (BDD) |
| API Tests | Postman + Newman |
| Language | TypeScript |
| Containerization | Docker + Docker Compose |
| CI/CD | GitHub Actions |

## Project Structure
```
apps/
  ui-tests/
    features/       # Gherkin scenarios
    steps/          # Step definitions
    hooks/          # Before/After hooks
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

## CI/CD

GitHub Actions runs automatically on every push and pull request to `main`. Reports are uploaded as artifacts after each run.

## Reports

After running tests, open:
- UI: `apps/ui-tests/reports/cucumber-report.html`
- API: `apps/api-tests/reports/report.html`
