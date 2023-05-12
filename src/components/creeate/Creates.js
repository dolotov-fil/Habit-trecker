import React, { useState } from "react";
import { projects } from "./../../helpers/projectsList";
import "./Style.css";
import { Link } from "react-router-dom";

export default function Creates() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState([]);

  const handletitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDayChange = (event) => {
    const selectedDay = event.target.value;
    if (days.includes(selectedDay)) {
      setDays((prevDays) => prevDays.filter((day) => day !== selectedDay));
    } else {
      setDays((prevDays) => [...prevDays, selectedDay]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newtitle = {
      type: title,
      description,
      days,
    };
    projects.push(newtitle);
    console.log(`Creating title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Days: ${JSON.stringify(days)}`);
    settitle("");
    setDescription("");
    setDays([]);
  };

  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="name">Name:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handletitleChange}
        />

        <br />
        <label htmlFor="description" className="Description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <label>Days:</label>
        <label htmlFor="monday">
          <input
            type="checkbox"
            id="monday"
            name="days"
            value="monday"
            checked={days.includes("monday")}
            onChange={handleDayChange}
          />{" "}
          Monday
        </label>
        <label htmlFor="tuesday">
          <input
            type="checkbox"
            id="tuesday"
            name="days"
            value="tuesday"
            checked={days.includes("tuesday")}
            onChange={handleDayChange}
          />{" "}
          Tuesday
        </label>
        <label htmlFor="wednesday">
          <input
            type="checkbox"
            id="wednesday"
            name="days"
            value="wednesday"
            checked={days.includes("wednesday")}
            onChange={handleDayChange}
          />{" "}
          Wednesday
        </label>
        <label htmlFor="thursday">
          <input
            type="checkbox"
            id="thursday"
            name="days"
            value="thursday"
            checked={days.includes("thursday")}
            onChange={handleDayChange}
          />{" "}
          Thursday
        </label>
        <label htmlFor="friday">
          <input
            type="checkbox"
            id="friday"
            name="days"
            value="friday"
            checked={days.includes("friday")}
            onChange={handleDayChange}
          />{" "}
          Friday
        </label>
        <label htmlFor="saturday">
          <input
            type="checkbox"
            id="saturday"
            name="days"
            value="saturday"
            checked={days.includes("saturday")}
            onChange={handleDayChange}
          />{" "}
          Saturday
        </label>
        <label htmlFor="sunday">
          <input
            type="checkbox"
            id="sunday"
            name="days"
            value="sunday"
            checked={days.includes("sunday")}
            onChange={handleDayChange}
          />{" "}
          Sunday
        </label>
        <br />
        <button to="/" type="submit">
          Creates
        </button>
        <Link className="btnCreate" to="/projects">
          Go to habits
        </Link>
      </form>
          
    </div>
  );
}
