import avatar from '../assets/avatars/avatar.jpg'

let initialState = {
    profileData: [
        {id: 1, avatarULR: avatar, userName: 'Кристина Кушняревич', jobTitle: 'Trainee/Junior JS React', status: 'В активном поиске работы',
        skills: [
            {id: 1, skill: 'HTML'},
            {id: 2, skill: 'CSS'},
            {id: 3, skill: 'JS'},
            {id: 4, skill: 'React'},
            {id: 5, skill: 'Redux'},
            {id: 6, skill: 'React-Redux'}
        ],
        aboutMe: [
            {id: 1, feature: 'целеустремленность'},
            {id: 2, feature: 'ответсвенность'},
            {id: 3, feature: 'организованность'},
            {id: 4, feature: 'аккуратность'},
        ],
        education: [
            {id: 1, level: 'ССО', educationalInstitution: 'МГКЭ', speciality: 'ОЭВМ и ОПП'},
            {id: 2, level: 'неоконченное высшее', educationalInstitution: 'БГТУ', speciality: 'ПОИТ'},
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