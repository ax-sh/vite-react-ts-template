
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
npm pkg set scripts.test="vitest"
```

npx degit user/project#main my-project