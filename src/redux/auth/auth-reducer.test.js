import authReducer, { setAuthUserData } from "./auth-reducer";

let state = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


describe('Auth Reducer', () => {
    const action = setAuthUserData(23, 'Nimvel@gmail.com', 'Nimvel', true);
    const newState = authReducer(state, action);

    test('authorized user id must be changed', () => {
        expect(newState.id).toBe(23);
    });

    test('authorized user email must be changed', () => {
        expect(newState.email).toBe('Nimvel@gmail.com');
    });

    test('authorized user login must be changed', () => {
        expect(newState.login).toBe('Nimvel');
    });

    test('isAuth must be changed', () => {
        expect(newState.isAuth).toBe(true);
    });
})