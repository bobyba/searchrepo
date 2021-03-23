const SET_STATUS = "SET_STATUS";

const initialState = { show: false };

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      let mid = state;
      let stateCopy = {
        show: !mid.show,
      };
      debugger
      return stateCopy;
    }
    default:
      return state;
  }
};

export const setStatus = () => {
  return {
    type: SET_STATUS,
  };
};

export const setStatusThunk = (status) => async (dispatch) => {
  dispatch(setStatus(status));
};

export default componentState;
