import "./App.css";
import { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "이진일",
    birthday: "960723",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이진이",
    birthday: "961222",
    gender: "남자",
    job: "개발자",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이진삼",
    birthday: "961232",
    gender: "남자",
    job: "디자이너",
  },
];

class App extends Component {
  render() {
    return (
      <div>

      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      />
      </div>
    );
  }
}

export default App;
