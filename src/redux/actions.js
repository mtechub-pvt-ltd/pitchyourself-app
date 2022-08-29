export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_Camera_VIDEO_URL = 'SET_Camera_VIDEO_URL';
export const SET_Camera_VIDEO_THUMBNAIL = 'SET_Camera_VIDEO_THUMBNAIL';
export const SET_PICK_VIDEO = 'SET_PICK_VIDEO';
export const SET_LINKS = 'SET_LINKS';

export const setID = id => dispatch => {
    dispatch({
        type: SET_USER_ID,
        payload: id,
    });
};

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setVideoUrl = video => dispatch => {
    dispatch({
        type: SET_Camera_VIDEO_URL,
        payload: video,
    });
};
export const setpickvideo= pickvideo => dispatch => {
    dispatch({
        type: SET_PICK_VIDEO,
        payload: pickvideo,
    });
};
export const setlinks= links => dispatch => {
    dispatch({
        type: SET_LINKS,
        payload: links,
    });
};

export const setthumbnails= thumbnail => dispatch => {
    dispatch({
        type: SET_Camera_VIDEO_THUMBNAIL,
        payload: thumbnail,
    });
};