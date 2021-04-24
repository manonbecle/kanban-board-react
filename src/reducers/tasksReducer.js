import data from 'src/data';

const initialState = {
  data,
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default tasksReducer;
