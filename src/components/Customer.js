import { render } from "@testing-library/react";
import React from "react"; //특정한 라이브러리를 불러옴

class Customer extends React.Component {
  //리액트의 컴포넌트 형태로 작성된 클래스
  render() {
    //랜더는 항상수행되는 내용, 실제 화면에 그리고자 할때 실제로 그려지는 내용
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile"></img>
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer; //내보내기
