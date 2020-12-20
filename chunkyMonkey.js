function chunkyMonkey(values, size) {
    return [values.slice(0, size),values.slice(size, (values.length))]
}