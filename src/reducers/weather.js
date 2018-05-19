const initialState = {
  weather: {},
  timestamp: ''
};

export default (reducerState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return { ...reducerState };
  }
}
