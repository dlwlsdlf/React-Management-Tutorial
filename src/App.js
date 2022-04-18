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
          {
            //customers가 배열이기에 각원소에 어떠한것을 적용하고싶을때 map
            customers.map(c=>{
              //map 함수는 key 값을 가지고 있어야함
              return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
              )
            })             
          }
      </div>
    );
  }
}

export default App;
