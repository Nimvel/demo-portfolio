import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';
import img_5 from '../assets/images/img_5.jpg';
import img_6 from '../assets/images/img_6.jpg';

let initialState = {
    photosData: [
        { id: 1, photo: img_1 },
        { id: 2, photo: img_2 },
        { id: 3, photo: img_3 },
        { id: 4, photo: img_4 },
        { id: 5, photo: img_5 },
        { id: 6, photo: img_6 }
    ]
}

const photosReducer = (state = initialState, action) => {
    return state;
}

export default photosReducer;
