# Acme Javascript SDK

This is a Javascript SDK for the Acme Petstore API.

## Setup
```bash
# Use the project's node version
$ nvm use

# Use the project's package manager (pnpm)
$ corepack enable

# Install dependencies
$ pnpm install
```

## Test
```bash
$ pnpm test
```

## Build
```bash
$ pnpm build
```
The build will be in the `dist/` directory, and can be distributed as a Javascript package on npm.
CD can be set up to automatically publish the package to npm whenever a release is made.