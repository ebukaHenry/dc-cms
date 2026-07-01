const TOKEN = "church_token";
const USER = "church_user";

export const saveToken = (token) => {

    localStorage.setItem(TOKEN, token);

};

export const getToken = () => {

    return localStorage.getItem(TOKEN);

};

export const removeToken = () => {

    localStorage.removeItem(TOKEN);

};

export const saveUser = (user) => {

    localStorage.setItem(USER, JSON.stringify(user));

};

export const getUser = () => {

    return JSON.parse(localStorage.getItem(USER));

};

export const removeUser = () => {

    localStorage.removeItem(USER);

};