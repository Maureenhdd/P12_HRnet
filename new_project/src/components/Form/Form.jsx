import { useState } from "react";
import { Link } from "react-router-dom";
import "../Form/Form.scss";
import { getStates } from "./utils";
import Modal from "../Modal/Modal";
import InputDate from "mh_date_picker";

const Form = () => {
  const states = getStates();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0].abbreviation);
  const [zipCode, setZipCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleChangeBirthDate = (e) => {
    setBirthDate(e);
  };

  const handleChangeDateStart = (e) => {
    setStartDate(e);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    setShowModal(true);
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStartDate("");
    setDepartment("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
  };

  const onClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="newEmployee_block">
        <h2>Create Employee</h2>

        <form>
          <label className="form_label" htmlFor="first-name">
            First Name
          </label>
          <input
            className="form_input"
            type="text"
            id="first-name"
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="form_label" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="form_input"
            type="text"
            id="last-name"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form_label" htmlFor="date-of-birth">
            Date of Birth
          </label>
          {/* <input
            className="form_input"
            id="date-of-birth"
            type="text"
            value={birthDate || ""}
            onChange={(e) => setBirthDate(e.target.value)}
          /> */}
          <InputDate
            date={new Date("2012-05-30")}
            onClick={handleChangeBirthDate}
          />

          <label className="form_label" htmlFor="start-date">
            Start Date
          </label>
          {/* <input
            className="form_input"
            id="start-date"
            type="text"
            value={startDate || ""}
            onChange={(e) => setStartDate(e.target.value)}
          /> */}
          <InputDate
            date={new Date("2012-05-30")}
            onClick={handleChangeDateStart}
          />

          <label className="form_label" htmlFor="department">
            Department
          </label>
          <select
            name="department"
            id="department"
            className="form_input"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option className="form_select">Sales</option>
            <option className="form_input">Marketing</option>
            <option className="form_input">Engineering</option>
            <option className="form_input">Human Resources</option>
            <option className="form_input">Legal</option>
          </select>
          <fieldset className="address">
            <legend>Address</legend>

            <label className="form_label" htmlFor="street">
              Street
            </label>
            <input
              className="form_input"
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label className="form_label" htmlFor="city">
              City
            </label>
            <input
              className="form_input"
              id="city"
              type="text"
              value={city || ""}
              onChange={(e) => setCity(e.target.value)}
            />

            <label className="form_label" htmlFor="state">
              State
            </label>
            <select
              name="state"
              id="state"
              className="form_input"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((state, i) => (
                <option key={i} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label className="form_label" htmlFor="zip-code">
              Zip Code
            </label>
            <input
              className="form_input"
              id="zip-code"
              type="number"
              value={zipCode || ""}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>
          <button className="form_btn" onClick={handleSubmit}>
            Save
          </button>
        </form>

        {showModal ? (
          <Modal
            title={"Yay !🎊"}
            description={"Your employee is created ! "}
            titleBtn={"Close"}
            onClick={onClick}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Form;
