# TranslocoMf2

The implementation of the TranslocoTranspiler interface in this project uses [messageformat V4](https://messageformat.github.io/documents/Project_Overview.html).
Since V4, the library [messageformat](https://github.com/messageformat/messageformat) provides an implementation
of [the Unicode standard MessageFormat 2 (MF2)](https://messageformat.unicode.org/).

The code in this project is inspired by [the current implementation in the Transloco project](https://github.com/jsverse/transloco/blob/transloco-7.6.1/libs/transloco-messageformat/src/lib/messageformat.transpiler.ts),
which still uses [messageformat V3](https://messageformat.github.io/messageformat/api/).

For more details, you can read
[this great article](https://blogs.igalia.com/compilers/2024/05/06/messageformat-2-0-a-new-standard-for-translatable-messages/).

## Dev server

```
# Compile the library in watch mode
pnpm watch
# Run the dev server
pnpm serve
```


## TODO

* Adapt tests
* Recreate cache feature (deleted for simplicity reasons)
