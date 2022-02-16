import React, { useEffect, useState } from 'react';
import Item from '../component/Item';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { fetchThunk } from '../../common/redux/thunk';
import { setDefaultData, setNewData } from '../redux/listReducer';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';

interface Props {}
const fakeList = [
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
];
const ListItem = (props: Props) => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  // const getDataList = React.useCallback(async () => {
  //   // setLoading(true);

  //   const json = await dispatch(fetchThunk('https://jsonplaceholder.typicode.com/photos', 'get'));
  //   console.log('55555', json);
  //   setItems(json);
  // }, []);

  // useEffect(() => {
  //   getDataList();
  // }, [getDataList]);

  const onReset = (data: any) => {
    console.log('reset');

    dispatch(setDefaultData());
  };
  const onConfirm = React.useCallback(
    (data: any) => {
      console.log('confirm', data);
      dispatch(setNewData(data));
    },
    [dispatch],
  );
  console.log('item', items);
  return (
    <div>
      {fakeList.map((item: any) => (
        <Item onReset={onReset} onConfirm={onConfirm} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListItem;
