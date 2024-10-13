# Acme Petstore API

## Problem

- We have an API server.
- Maintaining SDKs for multiple languages is a pain, because type bindings and documentation need to be kept in sync.

## Solution

- Maintain an OpenAPI spec for our API.
- The spec is the source of truth for our API.
- Generate clients for multiple languages from the spec; type bindings and documentation are always in sync. 
  Build on top of the generated clients to provide a more idiomatic SDK for each language.
  ```mermaid
    graph LR
        A[API Server] -->|produces| B[OpenAPI Spec]
        B -->|code gen| C[Python Client]
        B -->|code gen| D[Java Client]
        B -->|code gen| E[Javascript Client]
        B -->|code gen| F[Go Client]
        C --> G[Python SDK]
        D --> H[Java SDK]
        E --> I[Javascript SDK]
        F --> J[Go SDK]
  ```

