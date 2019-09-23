import Cookies from 'js-cookie';

const setCookiesValues = (userInfoObj) => {
    // console.log('Setting user info in Cookies', userInfoObj)
    for(let [cookieKey, cookieValue] of Object.entries(userInfoObj)) {
        Cookies.set(cookieKey, cookieValue)
    }
};

const isCookieValid = () => {
    for (let cookiekey of ['username', 'items', 'currentItem']) {
        if (Cookies.get(cookiekey) === undefined) return false
    }
    return true
};

const getUserCurrentItem = () => Cookies.get('currentItem');

const LoginHelpers = {
    setCookiesValues,
    isCookieValid,
    getUserCurrentItem
}

export default LoginHelpers;