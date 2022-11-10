// import { info } from "console";
// import React from "react";
// import "./App.css";

// // interface PersonalDetailsProps {
// //   personaldata: {
// //     info: {
// //       firstname: string;
// //       lastname: string;
// //       age: number;
// //       address: string;
// //     }[];
// //   };
// //   logo?: string;
// // }

// // const PersonalDetails = (props: PersonalDetailsProps) => {
// //   const { info } = props.personaldata;
// //   return (
// //     <div>
// //       <div>
// //         {info.map((particulars) => (
// //           <div> {particulars.firstname}</div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// const App = () => {
//   // const data = {
//   //   info: {
//   //     firstname: "Rose",
//   //     lastname: "Benson",
//   //     age: 19,
//   //     address: "Lusaka",
//   //     // firstname:"Rose", lastname: "Benson", age: 19, address:"Lusaka"
//   //   },
//   // };

//   // return (
//   //   <div className="App">
//   //     HELLO NINJA'S
//   //     {/* <PersonalDetails info={data} /> */}
//   //     {/* <personalDetails info={data} /> */}
//   //   </div>
//   // );

// };

// export default App;

//method 2

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import React from "react";
// import "./App.css";

// interface Details {
//   firstname: string;
//   lastname: string;
//   age: number;
//   address: string;
// }

// const info: Details = {
//   firstname: "Rose",
//   lastname: "Benson",
//   age: 32,
//   address: "lusaka",
// };

// const info1: Details = {
//   firstname: "Bernard",
//   lastname: "Flunk",
//   age: 15,
//   address: "mansa",
// };

// const info2: Details = {
//   firstname: "Jane",
//   lastname: "Doe",
//   age: 25,
//   address: "kabwe",
// };
// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>HELLO NINJA'S</h1>
//       <div>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <p> First NAME</p>
//               </TableCell>
//               <TableCell>
//                 <p> Last Name</p>
//               </TableCell>
//               <TableCell>
//                 <p> Age</p>
//               </TableCell>
//               <TableCell>
//                 <p> Address</p>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>
//                 <p> {info.firstname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info.lastname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info.age}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info.address}</p>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <p> {info1.firstname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info1.lastname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info1.age}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info1.address}</p>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <p> {info2.firstname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info2.lastname}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info2.age}</p>
//               </TableCell>
//               <TableCell>
//                 <p> {info2.address}</p>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default App;

// method 3

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import React from "react";
// import "./App.css";

// const App: React.FC = () => {
//   let personaldetails: (string | number)[] = ["Rose", "benson", 24, "lusaka"];

//   return (
//     <div>
//       <Table>
//         <TableHead>
//           <TableCell>
//             <p>FirstName</p>
//           </TableCell>
//           <TableCell>
//             <p>LastName</p>
//           </TableCell>
//           <TableCell>
//             <p>Age</p>
//           </TableCell>
//           <TableCell>
//             <p>Address</p>
//           </TableCell>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell>{personaldetails[0]}</TableCell>
//             <TableCell>{personaldetails[1]}</TableCell>
//             <TableCell>{personaldetails[2]}</TableCell>
//             <TableCell>{personaldetails[3]}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default App;

// method 4

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import "./App.css";

const App: React.FC = () => {
  let userdata: (string | number)[][] = [
    ["Rose", "benson", 24, "lusaka"],
    ["John", "jameson", 17, "mansa"],
    ["fredrick", "bernards", 76, "kabwe"],
    ["peter", "loyd", 38, "livingstone"],
  ];

  return (
    <div>
      <Table>
        <TableHead>
          <TableCell>
            <p>FirstName</p>
          </TableCell>
          <TableCell>
            <p>LastName</p>
          </TableCell>
          <TableCell>
            <p>Age</p>
          </TableCell>
          <TableCell>
            <p>Address</p>
          </TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{userdata[0][0]}</TableCell>
            <TableCell>{userdata[0][1]}</TableCell>
            <TableCell>{userdata[0][2]}</TableCell>
            <TableCell>{userdata[0][3]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{userdata[1][0]}</TableCell>
            <TableCell>{userdata[1][1]}</TableCell>
            <TableCell>{userdata[1][2]}</TableCell>
            <TableCell>{userdata[1][3]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{userdata[2][0]}</TableCell>
            <TableCell>{userdata[2][1]}</TableCell>
            <TableCell>{userdata[2][2]}</TableCell>
            <TableCell>{userdata[2][3]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{userdata[3][0]}</TableCell>
            <TableCell>{userdata[3][1]}</TableCell>
            <TableCell>{userdata[3][2]}</TableCell>
            <TableCell>{userdata[3][3]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default App;
