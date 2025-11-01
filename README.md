![CI](https://github.com/TallantM/ecs-fargate-ci/actions/workflows/ecs.yml/badge.svg)

# ECS Fargate CI

**Playwright in AWS ECS Fargate – Docker + CI/CD**

Serverless test execution in AWS Fargate using Docker + GitHub Actions.

## Features
- Playwright latest + TypeScript
- Docker + ECR-ready
- Fargate task definition
- GitHub Actions CI (test + Docker build)
- Zero servers
- Cloud-native execution

## Local Run
```bash
npm ci
npx playwright test
