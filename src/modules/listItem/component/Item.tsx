import React, { useState } from 'react';
import './styles/styles.css';
import { List, Avatar, Button, Skeleton } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducer';

// import { IListItemParam } from '../../../models/auth';
// interface Props {
//   onReset: ;
//   onConfirm: ;
// }

const Item = (props: any) => {
  const { onReset, onConfirm, item } = props;
  const [title, setTitle] = useState('');
  console.log('34343', title);
  console.log('7777777', item);

  const listItem = useSelector((state: AppState) => state.listData);
  console.log('2432424324', listItem);
  return (
    <div className="list-item">
      <div className="button-lists">
        <Button onClick={() => onConfirm(title)}>Confirm</Button>
        <Button onClick={() => onReset()}>Reset</Button>
      </div>

      <div className="item" key={item.id}>
        <img src={item.thumbnailUrl} alt="" />
        <div className="item-container">
          <p className="item-title">{listItem.title}</p>
          <form>
            <input
              type="text"
              name="listTitle"
              className="item-content"
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
