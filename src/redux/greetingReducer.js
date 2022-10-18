// Base URL
const url = 'http://[::1]:3000/api/v1/greeting';

// Action
const GETGREETING = 'http://[::1]:3000/api/v1/greeting/GET_GREETING'

// Action creator
export const getGreetingApi = () => async (dispatch) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const apiData = await response.json();
  const setData = apiData.map((greet) => {
    const greetData = {
      greet_id: greet.id,
      greet: greet.greet,
    };
    return greetData;
  });
  dispatch({
    type: GETGREETING,
    payload: setData,
  });
};

export default function greetingReducer(state = [], action) {
  switch (action.type) {
    case GETGREETING:
      return action.payload;
    default:
      return state;
  };
}