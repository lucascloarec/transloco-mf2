# Transloco MF2

The implementation of the TranslocoTranspiler interface in this project
uses [messageformat V4](https://messageformat.github.io/documents/Project_Overview.html).
Since V4, the library [messageformat](https://github.com/messageformat/messageformat) provides an implementation
of [the Unicode standard MessageFormat 2 (MF2)](https://messageformat.unicode.org/).

The code in this project is inspired by
[the current implementation in the Transloco project](https://github.com/jsverse/transloco/blob/transloco-7.6.1/libs/transloco-messageformat/src/lib/messageformat.transpiler.ts),
which uses [messageformat V3](https://messageformat.github.io/messageformat/api/).

For more details, you can read
[this great article](https://blogs.igalia.com/compilers/2024/05/06/messageformat-2-0-a-new-standard-for-translatable-messages/).

## Installation

Transloco must be installed and configured in your application.

```
pnpm add @cloarec/transloco-mf2
```

Then in your `main.config.ts` :

```typescript

export const appConfig: ApplicationConfig = {
    providers: [
        //...
        provideTransloco({/* your configuration */}),
        provideTranslocoMF2Transpiler({
            // https://messageformat.github.io/variables/messageformat_functions.DraftFunctions.html
            includeDraftFunctions: true
        }),
    ],
};
```

## Development

### Dev server

```
# Compile the library in watch mode
pnpm watch
# Run the dev server
pnpm serve
```


### Building

To build the library, run:

```bash
ng build transloco-mf2
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

#### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

    ```bash
    cd dist/transloco-mf2
    ```

2. Run the `npm publish` command to publish your library to the npm registry:
    ```bash
    npm publish
    ```

### TODO

* Adapt tests
* Recreate cache feature (deleted for simplicity reasons)
