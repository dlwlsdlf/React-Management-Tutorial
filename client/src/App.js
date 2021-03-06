import "./App.css";
import { Component } from "react";
import { Paper } from "@material-ui/core";
import Customer from "./components/Customer";
import { Table } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    //marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080
  },
});



class App extends Component {
//props 변경될수 없는 데이터
//state  변경가능
  state = {
    customers : ""
  }
  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers : res}))
    .catch(err =>console.log(err));
  }
  callApi = async ()=>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              //customers가 배열이기에 각원소에 어떠한것을 적용하고싶을때 map
              this.state.customers ? this.state.customers.map((c) => {
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
                  />);
              }) : " "
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
