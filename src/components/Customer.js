import React from "react"; //특정한 라이브러리를 불러옴

class Customer extends React.Component {
  //리액트의 컴포넌트 형태로 작성된 클래스
  render() {
    //랜더는 항상수행되는 내용, 실제 화면에 그리고자 할때 실제로 그려지는 내용
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}
export default Customer; //내보내기
