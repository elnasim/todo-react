import React, { useState } from "react";
import "./AddForm.scss";

export default ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim()) {
      addItem(value);
      setValue("");
    } else {
      alert("Поле не может быть пустым");
    }
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='add-form__input'
        onChange={handleChange}
        value={value}
      />
      <button className='add-form__btn'>Добавить</button>
    </form>
  );
};
