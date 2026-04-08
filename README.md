# QA Automation Lab

[![CI](https://github.com/stutlerxgod/QA-AUTOMATION-LAB/actions/workflows/ci.yml/badge.svg)](https://github.com/stutlerxgod/QA-AUTOMATION-LAB/actions/workflows/ci.yml)

End-to-end test automation suite for [automationexercise.com](https://automationexercise.com) — a practice e-commerce platform.

## Stack

| Layer | Tools |
|-------|-------|
| UI Tests | Playwright + Cucumber.js (BDD) |
| API Tests | Postman + Newman |
| Performance Tests | Grafana k6 |
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
  performance-tests/
    tests/          # User flow
    scenarios/      # Load / stress / spike / soak
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker (optional)
- [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) (optional, for performance tests)

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

### Performance Tests

Requires [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) installed locally. Run manually — not included in CI.

```bash
# smoke run (user flow, no load)
npm run test:performance

# load — 20 users, 3 minutes (normal traffic)
k6 run apps/performance-tests/scenarios/load.ts

# stress — ramp up to 150 users (find the breaking point)
k6 run apps/performance-tests/scenarios/stress.ts

# spike — sudden burst to 100 users
k6 run apps/performance-tests/scenarios/spike.ts

# soak — 20 users for 30 minutes (detect memory leaks)
k6 run apps/performance-tests/scenarios/soak.ts
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
