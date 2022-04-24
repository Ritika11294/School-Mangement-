const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


const loginRequest = (admin) => {
    return {
        type: LOGIN,
        payload: admin
    }
}

const logoutRequest = () => {
    return {
        type: LOGOUT
    }
}

export { logoutRequest , loginRequest , LOGIN , LOGOUT };