const initialState = {
  loading: false,
  data: {},
  error: ''
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_WEATHER_SUCCESS':
      return { loading: false, data: action.payload, error: '' };
    case 'FETCH_WEATHER_FAIL':
      return { loading: false, data: {}, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;