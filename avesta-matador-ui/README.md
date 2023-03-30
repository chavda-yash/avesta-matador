# Avesta Matador Frontend

## Description

-   This repo contains REV Admin UI built using React, and it is a Matador Project for getting logs from **AWS cloud watch** with some new features like multiple log-group selection and customize log filter patterns.
-   It is also a Single Page Application (SPA) and uses Vite.js for the developer environment.
-   We use prettier for code formatting and eslint for linting. These checks are performed on each commit.

## Project Documentation

-   Google Doc - https://docs.google.com/document/d/1JeShhv33Sx4JQJe82W9N_ye4rAyg2XAg6914kJBDT08/edit?usp=sharing
-   Primary JIRA Ticket - https://realestateview.atlassian.net/browse/RA-1733?atlOrigin=eyJpIjoiMzZjOGE2ZGM5Y2U4NGU1MjgzM2RmMzMyNjkwYmZjZjIiLCJwIjoiaiJ9

## Starting project locally

1. Install dependencies

```bash
npm i
```

2. Start server locally

```bash
npm run dev
```

## Commit message conventions

This project follows [Conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/). Commit messages are important because the changelog is prepared based on the commit messages and the message is validated before committing using commitlint.

## Guidelines

-   All code that goes into the main should be in form of a PR
-   React.js version supported: **18.2.0+**
-   TypeScript version supported: **4.9.5+**
-   Node.js version supported: **16.0.0+**

## Git Branching strategy and release workflow

The entire process is documented in https://docs.google.com/document/d/1NxSzknO96PGqoej9UWiLpleNVYTBfKMrpdYCu_f3NAs/edit?usp=sharing

## Ownership

Vinay Bhinde, Harsh Gandhi, Yugant Patel
