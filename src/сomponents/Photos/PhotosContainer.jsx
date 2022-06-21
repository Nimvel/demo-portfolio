import Photos from './Photos';
import { connect } from 'react-redux';
import { bigPhotoActionCreator, smallPhotoActionCreator } from '../../redux/photos-reducer';

let mapStateToProps = (state) => {
    return {
        photosData: state.photosPage.photosData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        bigPhoto: (id) => dispatch(bigPhotoActionCreator(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos) ;
