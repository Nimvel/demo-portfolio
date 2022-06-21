import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';
import img_5 from '../assets/images/img_5.jpg';
import img_6 from '../assets/images/img_6.jpg';

let BIG_PHOTO = 'BIG_PHOTO';

let initialState = {
    photosData: [
        { id: 1, photo: img_1, classes: 'photo', isClicked: false },
        { id: 2, photo: img_2, classes: 'photo', isClicked: false },
        { id: 3, photo: img_3, classes: 'photo', isClicked: false },
        { id: 4, photo: img_4, classes: 'photo', isClicked: false },
        { id: 5, photo: img_5, classes: 'photo', isClicked: false },
        { id: 6, photo: img_6, classes: 'photo', isClicked: false }
    ]
}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case BIG_PHOTO:
            let stateCopy = { ...state, photosData: [...state.photosData]};
            let photoId;
            for (let i = 0; i < stateCopy.photosData.length; i++) {
                if (stateCopy.photosData[i].id === action.id) photoId = i;
            }
            if (!stateCopy.photosData[photoId].isClicked) {
                stateCopy.photosData[photoId].isClicked = true;
                stateCopy.photosData[photoId].classes = 'big_photo';
            }
            else {
                stateCopy.photosData[photoId].isClicked = false;
                stateCopy.photosData[photoId].classes = 'photo';
            }
            return stateCopy

        default: return state;
    }
}

export const bigPhotoActionCreator = (id) => ({ type: BIG_PHOTO, id });

export default photosReducer;
