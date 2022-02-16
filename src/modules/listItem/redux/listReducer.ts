import { ActionType, createCustomAction, getType } from 'typesafe-actions';

export interface ListState {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export const setDefaultData = createCustomAction('item/setDefaultData');

export const setNewData = createCustomAction('item/setNewData', (data) => ({
  data,
}));

const initalState = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
};
const actions = { setDefaultData, setNewData };

type Action = ActionType<typeof actions>;

export default function reducer(state = initalState, action: Action) {
  switch (action.type) {
    case getType(setDefaultData):
      return { ...initalState };
    case getType(setNewData):
      return { ...state, title: action.data };
    default:
      return state;
  }
}
