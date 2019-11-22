import React from "react";
import "./TodoItem.scss";

export default ({ item, remove }) => {
  const removeHandler = () => {
    remove(item.id);
  };

  const styles = [];

  return (
    <div className='todo-item'>
      <div className='todo-item__text'>{item.title}</div>
      <div className='todo-item__control'>
        <div className='todo-item__remove' onClick={removeHandler}>
          x
        </div>
      </div>
    </div>
  );
};
