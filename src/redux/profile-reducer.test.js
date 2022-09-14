import profileReducer, { setAuthProfile, setAuthUserStatus, setProfile, setStatus, updateStatus } from "./profile-reducer";

let state = {
    authUserProfileData: null,
    authUserStatus: '',

    profileData: null,
    status: ''
}

test('an authorized user profile must be added', () => {
    let action = setAuthProfile({userName: 'Nimvel'});
    let newState = profileReducer(state, action);
    expect(newState.authUserProfileData.userName).toBe('Nimvel');
});

test('a user profile must be added', () => {
    let action = setProfile({userName: 'Nimvel'});
    let newState = profileReducer(state, action);
    expect(newState.profileData.userName).toBe('Nimvel');
});

test('an authorized user status must be added', () => {
    let action = setAuthUserStatus('status');
    let newState = profileReducer(state, action);
    expect(newState.authUserStatus).toBe('status');
});

test('a user status must be added', () => {
    let action = setStatus('status');
    let newState = profileReducer(state, action);
    expect(newState.status).toBe('status');
});