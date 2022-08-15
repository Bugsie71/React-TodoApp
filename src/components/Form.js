import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "" || date === "") {
      return;
    }

    addTodo({ text, date, time, reminder });

    setText("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            id='text'
            type='text'
            className='form-control'
            placeholder='What do you have Todo?'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            className='form-control'
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='time'>Time</label>
          <input
            id='time'
            type='time'
            className='form-control'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='reminder'>Reminder</label>
          <input
            type='checkbox'
            name='reminder'
            checked={reminder}
            value={reminder}
            id='reminder-check'
            onChange={(e) => {
              setReminder(e.target.checked);
            }}
          />
        </div>
        <div className='btn-container'>
          <button className='btn' type='submit'>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
