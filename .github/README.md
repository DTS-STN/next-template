# Click to view the test reports for Main 👩‍🔬🧪

[![GitHub Workflow Status](https://github.com/DTS-STN/next-template/actions/workflows/e2e.yml/badge.svg?branch=main)](https://dts-stn.github.io/next-template/main/coverage/e2e-report/)
[![GitHub Workflow Status](https://github.com/DTS-STN/next-template/actions/workflows/unit.yml/badge.svg?branch=main)](https://dts-stn.github.io/next-template/main/coverage/lcov-report/)
![GitHub Workflow Status](https://github.com/DTS-STN/next-template/actions/workflows/sast.yml/badge.svg?branch=main)
![GitHub Workflow Status](https://github.com/DTS-STN/next-template/actions/workflows/dast.yml/badge.svg?branch=main)

![Line Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Line%20Coverage&query=%24.total.lines.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fnext-template%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Statements Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Statement%20Coverage&query=%24.total.statements.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fnext-template%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Function Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Function%20Coverage&query=%24.total.functions.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fnext-template%2Fmain%2Fcoverage%2Fcoverage-summary.json)
![Branch Coverage Badge](https://img.shields.io/badge/dynamic/json?label=Branch%20Coverage&query=%24.total.branches.pct&suffix=%25&url=https%3A%2F%2Fdts-stn.github.io%2Fnext-template%2Fmain%2Fcoverage%2Fcoverage-summary.json)

## Versions

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/next-template/next)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/next-template/dev/tailwindcss)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/next-template/dev/jest)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DTS-STN/next-template/dev/cypress)

## Description

Quick starter template for DTS projects making use of one of our commonly-used [Next.js](https://nextjs.org/) setups.
This template uses the basic Next.js [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) bootstrap template.

### Technologies Implemented

This project uses

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) for unit testing
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## How to Implement/Get Started

First, create/copy the env file.

```bash
cp .env.example .env
```

Second, install npm packages:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
