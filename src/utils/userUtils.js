export function getUsernameFromToken(token) {
    if (token) {
        const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        return decodedToken.sub;

    }
    return "";
}