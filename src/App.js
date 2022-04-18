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
              customers.map((c) => {
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
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
