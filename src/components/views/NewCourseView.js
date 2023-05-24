import React from 'react';

const NewTaskView = ({ handleChange, handleSubmit, error }) => {
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
            New Task
          </h2>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <label style={{ color: "blue", fontWeight: "bold" }}>
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
          />
          <br />
          <br />

          <label style={{ color: "blue", fontWeight: "bold" }}>
            Priority Level:{" "}
          </label>
          <input
            type="text"
            name="prioritylevel"
            onChange={handleChange}
          />
          <br />
          <br />

          <label style={{ color: "blue", fontWeight: "bold" }}>
            Completion Status:{" "}
          </label>
          <input
            type="text"
            name="completionstatus"
            onChange={handleChange}
          />
          <br />
          <br />

          <label style={{ color: "blue", fontWeight: "bold" }}>
            EmployeeId:{" "}
          </label>
          <input
            type="text"
            name="employeeId"
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

export default NewTaskView;