const GET_GREETING = 'GET_GREETING';

// *Actions
const storeGreet = (payload) => ({
  type: GET_GREETING,
  payload,
});

// *Async action
export const fetchingData = () => async (dispatch) => {
  console.log('first');
  const data = await fetch('api/greetings', {
    method: 'GET',
  });
  try {
    const greetings = await data.json();
    dispatch(storeGreet(greetings));
  } catch (error) {
    console.error(error);
  }
};

// *Reducer
const greetingsReducer = (state = 'hi', action) => {
  switch (action.type) {
    case GET_GREETING:
      return (state = action.payload);
    default:
      return null;
  }
};

export default greetingsReducer;
