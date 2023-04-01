# Next + pnpm + typescript + tailwind 

This is a starter application built using Next 13, pnpm workspaces, typescript, and tailwind.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Adding a Workspace](#adding-a-workspace)

## Features

- [Next.js 13](https://nextjs.org/blog/next-13) - A popular React framework for building high-performance applications.
- [PNPM Workspaces](https://pnpm.io/workspaces) - Efficient dependency management that allows you to manage multiple projects in a monorepo.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- [Typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## Prerequisites

- [Node.js 14.17+](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)

## Getting Started

Install dependencies and start the development server.
```sh
pnpm install && pnpm dev
```
Open your browser and navigate to http://localhost:3000.

## Adding a Workspace

1. Create a new folder inside `libs` and name it accordingly.
2. Add a `package.json` file inside the newly created folder.
3. Register the new workspace in `pnpm-workspace.yaml` under the `libs` field:


```yaml
packages:
  - 'frameworks/next-starter'
  - 'frameworks/<new-workspace>'
```
