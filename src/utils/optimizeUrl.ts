export function optimizeUrl() {
    const url = window.location.href;
    const optimizedUrl = url.replace('#', '');

    if (url !== optimizedUrl) {
        window.history.replaceState({}, "", optimizedUrl);
    }
}
