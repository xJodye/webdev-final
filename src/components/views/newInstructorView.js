import React from 'react';

const NewInstructorView = ({ handleChange, handleSubmit, error }) => {
  return (
    <div className="root">

      <div className="formContainer">
        <div className="formTitle">
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "blue",
            }}>
            New Employee
          </h2>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <label style={{ color: "blue", fontWeight: "bold" }}>
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
          />
          <br />
          <br />

          <label style={{ color: "blue", fontWeight: "bold" }}>
            Last Name :{" "}
          </label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
          />
          <br />
          <br />

          <label style={{ color: "blue", fontWeight: "bold" }}>
            Department:{" "}
          </label>
          <input
            type="text"
            name="department"
            onChange={handleChange}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default NewInstructorView;