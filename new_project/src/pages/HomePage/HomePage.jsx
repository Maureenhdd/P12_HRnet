import Form from "../../components/Form/Form";
import InputDate from "mh_date_picker";
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";

const onClick = (date) => {
  console.log(date);
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Form />

      {/* <InputDate date={new Date("2012-05-30")} onClick={onClick} /> */}
    </>
  );
};

export default HomePage;
