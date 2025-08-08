// Portable implementation of
// https://nodejs.org/api/path.html#pathbasenamepath-suffix

const basename = (document) => {
    // /foo/bar/baz/asdf/quux.html
    // ->
    // quux.html
    const parts = document.split('/')
    return parts[parts.length - 1]
}

module.exports = basename