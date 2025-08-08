// Portable implementation of
// https://nodejs.org/api/path.html#pathextnamepath

const extname = (document) => {
    // /foo/bar/baz/asdf/quux.html
    // ->
    // .html
    const parts = document.split('.')
    return parts[parts.length - 1]
}

module.exports = extname