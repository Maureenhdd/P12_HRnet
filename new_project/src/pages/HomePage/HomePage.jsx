import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import { InputDate } from "mh_date_picker";
import "./HomePage.scss";

const onClick = (date) => {
  console.log(date);
};

const HomePage = () => {
  return (
    <>
      <h1>HRNET</h1>
      <Link to="/employee">View current employeesss</Link>
      {/* <Form /> */}

      <InputDate date={new Date("2012-05-30")} onClick={onClick} />
    </>
  );
};

export default HomePage;
