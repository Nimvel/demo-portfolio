const img_1 = require('../assets/images/img_1.jpg')
const img_2 = require('../assets/images/img_2.jpg')
const img_3 = require('../assets/images/img_3.jpg')
const img_4 = require('../assets/images/img_4.jpg')
const img_5 = require('../assets/images/img_5.jpg')
const img_6 = require('../assets/images/img_6.jpg')

type InitialStateType = {
    photosData: any[]
}

const initialState:InitialStateType = {
    photosData: [
        { id: 1, photo: img_1 },
        { id: 2, photo: img_2 },
        { id: 3, photo: img_3 },
        { id: 4, photo: img_4 },
        { id: 5, photo: img_5 },
        { id: 6, photo: img_6 }
    ]
}

const photosReducer = (state = initialState, action: any) => {
    switch (action.type) {
            
        default: return state
    }
}

export default photosReducer
