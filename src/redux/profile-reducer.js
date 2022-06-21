import avatar from '../assets/avatars/avatar.jpg'

let initialState = {
    profileData: [
        {id: 1, avatarULR: avatar, userName: 'Кристина Кушняревич', jobTitle: 'Trainee/Junior JS React', status: 'В активном поиске работы',
        skills: [
            {id: 1, skill: 'HTML', url: 'https://developer.mozilla.org/ru/docs/Web/HTML'},
            {id: 2, skill: 'CSS', url: 'https://developer.mozilla.org/ru/docs/Web/CSS/Reference'},
            {id: 3, skill: 'JS', url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'},
            {id: 4, skill: 'React', url: 'https://ru.reactjs.org/docs/getting-started.html'},
            {id: 5, skill: 'Redux', url: 'https://rajdee.gitbooks.io/redux-in-russian/content/'},
            {id: 6, skill: 'React-Redux', url: 'https://rajdee.gitbooks.io/redux-in-russian/content/'}
        ],
        aboutMe: [
            {id: 1, feature: 'целеустремленность'},
            {id: 2, feature: 'ответсвенность'},
            {id: 3, feature: 'организованность'},
            {id: 4, feature: 'аккуратность'},
        ],
        education: [
            {id: 1, level: 'ССО', educationalInstitution: 'МГКЭ', speciality: 'ОЭВМ и ОПП', url: 'http://mgke.minsk.edu.by/'},
            {id: 2, level: 'неоконченное высшее', educationalInstitution: 'БГТУ', speciality: 'ПОИТ', url: 'https://www.belstu.by/'},
            // {id: 3, level: 'неоконченное высшее', educationalInstitution: 'МГЛУ', speciality: 'переводчик'}
        ],
        languages: [
            {id: 1, language: 'английский', level: 'A1'}
        ]
    }
    ]
}

const profileReducer = (state = initialState, action) => {
    return state;
}

export default profileReducer;