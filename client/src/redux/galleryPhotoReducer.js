const initialState = 0;
export const galleryPhoto = state => state.photo;

const createActionName = actionName => `app/gallery/${actionName}`;
const PREV_PHOTO = createActionName('PREV_PHOTO');
const NEXT_PHOTO = createActionName('NEXT_PHOTO');
export const prevPhoto = payload => ({ type: PREV_PHOTO, payload});
export const nextPhoto = payload => ({ type: NEXT_PHOTO, payload});

const PhotoReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case NEXT_PHOTO:
      return statePart >= 1 ? statePart - 1 : statePart = 0;
    case PREV_PHOTO:
       return statePart <= 1 ? statePart + 1 : statePart = 8;  
    default: 
      return statePart;
  }
}

export default PhotoReducer;