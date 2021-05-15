import {nanoid} from 'nanoid';
import {ADD_SERVICE, FILTER_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];


export default function serviceListReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      if(state.find((el) => el.name===name))
      {
        return state.map((el,i) => {
          if(el.name===name)
          {
            state[i].price=price;
          }
          return el;
        })
      }
      else
      {
        return [...state, {id: nanoid(), name, price: Number(price)}];
      }
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case FILTER_SERVICE:
      const {val} = action.payload;
      if(val.length>0)
      {
        return state.filter(el => el.name.includes(val));
      }
     return state;
    
    default:
      return state;
  }
}