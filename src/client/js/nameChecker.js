function checkForName(urlInput) {
    const url = /^http:\/\/|^https:\/\//i
    return url.test(urlInput);
}

export { checkForName }
