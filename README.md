# API Social E2E
E2E tests for API Social

# Getting Started
Please ensure the following requirements are installed:

## for local setup
* Node js LTS
* PNPM - `npm install -g pnpm`

## for docker setup
* Latest docker


# Executing tests
To execute the tests perform the following:
## for local setup
1. Install node_modules by running `pnpm install`
2. Execute the tests by running `pnpm test`

## for docker
1. Execute `docker compose run e2e`

**NB: for macOS users running on arm64 for some reason the docker setup does not work, but the local setup does. Manually entering the docker container and executing the tests does work though.**
