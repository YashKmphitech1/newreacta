import moment from "moment";
import React, { useRef, useState } from "react";
import { Cookies, useCookies } from "react-cookie";

const Test = () => {
  // console.log('typeof num', Number.parseInt(num).toString().length)

  let validate = "";

  // creating the current date
  // var d_reg =
  //   /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
  // var user_date = "28/02/16";
  // if (d_reg.test(user_date)) {
  //   console.log(`Date ${user_date} is valid`);
  // } else {
  //   console.log("Invalid date format");
  // }
  let myDate="2016-02-30"
  let date = moment(myDate, 'YYYY-MM-DD');
  validate = `${myDate} is valid : ` + date.isValid() + "<br/>";
  
  console.log('validate', validate)
  // let rows = 5;

  // const count =useRef();
  // console.error("countcount",count)
  // const myElement = React.createElement('h1', {}, 'I do not use JSX!');
  // // pattern variable carries the final pattern in string format
  // let pattern = "";

  // // outer loop runs for `rows` no. of times
  // for (let n = 1; n <= rows; n++) {
  //   // 1 2 3
  //   // Inner Loop - I -> for the spaces
  //   for (let space = 1; space <= rows - n; space++) {
  //     // 4 3 2
  //     // console.log('space', space) // 1234 123 12
  //     pattern += " ";
  //   }

  //   // Inner Loop - II -> for the numbers
  //   for (let num = 1; num <= 2 * n - 1; num++) {
  //     //1 3 5
  //     // console.log(num <= 2 * n - 1,'num', num) //1 123 12345
  //     pattern += num;
  //   }

  //   pattern += "\n";
  // }
  //   console.log(pattern);

  // const numbers = [1, 2, 3, 4];
  // const sum = numbers.reduce(function (result, item) {
  //  console.log('result', result,"item",item)
  //   return result + item;
  // }, 0);
  // console.log(sum); // 10
  // let new1={f:"y"}
  // let new2= new1;
  //     new2.f="A";
  //     console.log('new1', new1)
  //     console.log('new2', new2)
  // 1 2 3 4 5
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["All"]);

  const handle = () => {
    // setCookie()
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
  };

  // console.log('cookies',cookies["Name"])
  // console.log('cookies',cookies["Password"])

  const delet = () => {
    removeCookie("Name");
  };
  return (
    <div className="App">
      <button onClick={delet}>Delete</button>
      <h1>Name of the user:</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="name"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button onClick={handle}>Set Cookie</button>
      </div>
    </div>
  );
};

export default Test;
