import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useRef } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const deleteBtnContainer = useRef();

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");

    return `${month} / ${day} / ${year}`;
  };

  const formatTime = (time) => {
    const timeSplit = time.split(":");
    let hours = timeSplit[0];
    let ending = hours - 12 > 0 ? "PM" : "AM";

    if (hours === "00") {
      timeSplit[0] = 12;
      ending = "AM";
    } else if (hours === "12") {
      ending = "PM";
    } else {
      timeSplit[0] = hours - 12 > 0 ? hours - 12 : hours;
    }

    return time === "" ? "" : `at ${timeSplit.join(":")} ${ending}`;
  };

  return (
    <div
      className={`todo-container ${todo.reminder ? "reminder" : ""}`}
      onDoubleClick={(e) => {
        e.target.className.includes("reminder")
          ? e.target.classList.remove("reminder")
          : e.target.classList.add("reminder");
      }}
      onMouseEnter={() => {
        gsap.from(deleteBtnContainer.current, { x: 10 });
        gsap.to(deleteBtnContainer.current, { opacity: 1, x: 0 });
      }}
      onMouseLeave={() => {
        gsap.to(deleteBtnContainer.current, { opacity: 0, x: 10 });
      }}
    >
      <div className='todo-content-section'>
        <div className='text-container'>{todo.text}</div>
        <div className='date-time-container'>
          <span className='date-container'>{formatDate(todo.date)}</span>{" "}
          <span className='time-container'>{formatTime(todo.time)}</span>
        </div>
      </div>
      <div
        className='todo-delete-section'
        onClick={() => deleteTodo(todo.id)}
        ref={deleteBtnContainer}
      >
        <FontAwesomeIcon icon={faX} className='delete-btn btn' />
      </div>
    </div>
  );
};

export default Todo;
