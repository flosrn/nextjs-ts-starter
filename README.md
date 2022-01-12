<div align="center">
  <h1>🚀 nextjs-ts-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Widely inspired by <a href="https://github.
com/theodorusclarence/ts-nextjs-tailwind-starter">ts-nextjs-tailwind-starter
</a> by <a href="https://theodorusclarence.com">Theodorus 
Clarence</a></p>

[![CodeFactor](https://www.codefactor.io/repository/github/flosrn/nextjs-ts-starter/badge)](https://www.codefactor.io/repository/github/flosrn/nextjs-ts-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=flosrn_nextjs-ts-starter&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=flosrn_nextjs-ts-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=flosrn_nextjs-ts-starter&metric=bugs)](https://sonarcloud.io/dashboard?id=flosrn_nextjs-ts-starter)
[![GitHub Repo stars](https://img.shields.io/github/stars/flosrn/nextjs-ts-starter)](https://github.com/flosrn/nextjs-ts-starter/stargazers)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=flosrn_nextjs-ts-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=flosrn_nextjs-ts-starter)
[![Depfu](https://badges.depfu.com/badges/6e20d2307eab6a5bcf3471f17401968a/count.svg)](https://depfu.com/github/flosrn/nextjs-ts-starter?project_id=33576)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 12
- ⚛️ React 17
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color, [check here for the demo](https://nextjs-ts-starter-flosrn.vercel.app/components)
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Standard Version Changelog — Generate your changelog using `yarn release`
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Default Open Graph — Awesome open graph generated using [og.thcl.dev](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/flosrn/nextjs-ts-starter project-name
   ```

3. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)]()

### 2. Run the development server

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 3. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 4. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Expansion Pack 📦

This starter is now equipped with an [expansion pack](https://github.com/flosrn/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4

Check out the [expansion pack repository](https://github.com/flosrn/expansion-pack) for the commands
