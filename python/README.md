# Acme Python SDK

This is a Python SDK for the Acme Petstore API.

## Setup
1. [Install rye globally](https://rye.astral.sh/)
2. Run `rye sync` in this directory to install dependencies

## Test
```bash
rye run test
```
This effectively runs `rye run generate` followed by `rye test` command,
ensuring that the generated code is up-to-date before running tests.
We can optimize this with some content-aware caching toolchain in the future 
(e.g. javascript's turborepo / java's gradle. Not sure if Rye supports this).

## Build
```bash
rye build
```
The build will be in the `dist/` directory, and can be distributed as a Python package.
CD can be set up to automatically publish the package to a package repository like PyPI whenever a release is made.
See the [Rye docs](https://rye.astral.sh/guide/publish/) on publishing for more information.
