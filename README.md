[![App CI](https://github.com/ax-sh/vite-react-ts-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ax-sh/vite-react-ts-template/actions/workflows/ci.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
```shell
pnpm create vite
```

```shell
pnpm install -D @commitlint/cli @commitlint/config-conventional
echo "{extends: ['@commitlint/config-conventional']}" > .commitlintrc

pnpm dlx husky-init && pnpm install
pnpx husky add .husky/commit-msg 'pnpx --no -- commitlint --edit "$1"'
```

```shell
pnpm add -D vitest
npm pkg set scripts.test="vitest run"
pnpm install --save-dev @testing-library/jest-dom
pnpm install --save-dev @testing-library/react
```

```shell
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init --ts
npx tailwindcss init -p
```

```shell
# https://github.com/hannoeru/vite-plugin-pages
pnpm install -D vite-plugin-pages
pnpm install react-router react-router-dom
```

```shell
pnpm add --save-dev --save-exact prettier
pnpm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
pnpm i -D unplugin-turbo-console

```

```shell
pnpm add @tanstack/react-query
pnpm add -D @tanstack/eslint-plugin-query
pnpm add @tanstack/react-query-devtools
```

```shell
pnpm install msw --save-dev
pnpx msw init public
```

```shell
# https://github.com/fi3ework/vite-plugin-checker?tab=readme-ov-file
```

```shell
todo
npx degit ax-sh/project#main my-project
```
