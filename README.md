# Axle Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/axle)](https://www.npmjs.com/package/@fern-api/axle)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Axle Node.js library provides access to the Axle API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.axle.insure/welcome).


## Installation

```
npm install --save @fern-api/axle
# or
yarn add @fern-api/axle
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-7zupqs?file=app.ts)

```typescript
import { AxleClient } from '@fern-api/axle';

const axle = new AxleClient({
  clientId: 'cli_mZj6YGXhQyQnccN97aXbq',
  clientSecret: 'RZM-5BErZuChKqycbCS1O',
});

const response = await axle.ignition.startIgnition({
  redirectUri: 'https://example.com/insurance/success',
  webhookUri: 'https://example.com/webhook',
});

console.log('Received ignitionUri from Axle!', response.data.ignitionUri);
```

## Sandbox Environment

By default, the client will hit the production environment. If you want to use the client with the Sandbox, then you must specify it during client instantiation. 

```typescript
import { AxleEnvironment, AxleClient } from '@fern-api/axle';

const axle = new AxleClient({
  environment: AxleEnvironment.Sandbox,
  clientId: 'cli_mZj6YGXhQyQnccN97aXbq',
  clientSecret: 'RZM-5BErZuChKqycbCS1O',
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
