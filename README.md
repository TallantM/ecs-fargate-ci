# ECS Fargate CI

**Playwright in AWS ECS Fargate – Docker + CI/CD**

![CI](https://github.com/TallantM/ecs-fargate-ci/actions/workflows/ecs.yml/badge.svg)

## Features
- Playwright latest + TypeScript
- Dockerized test execution
- AWS ECS Fargate task definition
- GitHub Actions CI (test + Docker build)

## Local Run
```bash
npm ci
npx playwright test
