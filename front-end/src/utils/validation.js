export const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]{3,}$/;
    return regex.test(username);
};