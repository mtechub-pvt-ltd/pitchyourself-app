import { SET_USER_ID, SET_USER_NAME,SET_Camera_VIDEO_URL,SET_LINKS,SET_Camera_VIDEO_THUMBNAIL,SET_PICK_VIDEO} from './actions';

const initialState = {
    id:'',
    name: '',
video:'',
links:'',
thumbnails:'',
pickvideo:''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return { ...state, id: action.payload };
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_Camera_VIDEO_URL:
            return { ...state, video: action.payload };
            case SET_PICK_VIDEO:
                return { ...state, pickvideo: action.payload };
        case SET_LINKS:
            return { ...state, links: action.payload };
            case SET_Camera_VIDEO_THUMBNAIL:
                return { ...state, thumbnails: action.payload };
        default:
            return state;
    }
}

export default userReducer;