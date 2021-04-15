const initialState = {
  widgetCreation: {
    title: 'XXX',
    descritpion: 'XXX',
    familyMembers: [],
    label: '',
    date:'',
    listSyle: '',
    fields: [],
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case :
      return {
        ...state,
          ,
      }
    default: 
      return state;
  }
};