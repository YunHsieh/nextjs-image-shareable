import ClientTransport from '../../helpers/apis';

const initialState = {
  test: '',
}

const fetchTestApi = () => async(dispatch) => {
  try{
    const requestParameters = {
      url:'/test', 
      method:'get',
      headers: { 'Content-Type': 'application/json' },
    }
    const testData = await ClientTransport.fetchBase(requestParameters);

    if (testData && testData.data){
      const {
        test,
      } = {...testData.data};
      dispatch({
        type: "API_TEST",
        payload:testData.data
      })
    }

  } catch(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};

const myReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "API_TEST":
      return {
        ...state,
        ...payload,
      };
    default: 
      return state;
  }
}

export {
  myReducer,
  fetchTestApi,
};