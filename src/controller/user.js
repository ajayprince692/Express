import {findIndex} from "../common/helper.js";

let user = [
  {
    id: 1,
    name: "Ajay",
    email: "ajay@gmail.com",
    role: "user",
  },
  {
    id: 2,
    name: "Sonic",
    email: "sonic@gmail.com",
    role: "runner",
  },
  {
    id: 3,
    name: "Goku",
    email: "goku@gmail.com",
    role: "supersaiyan",
  },
];

let getAllUsers = (req, res) => {
  try {
    res.status(200).send({
      message: "Users retrieved successfully",
      users: user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to retrieve users",
    });
  }
};


const getUserById = (req,res)=>{
  try{
    const{id} = req.params;
    console.log(id);
  }
  catch(error){

  }
}





// let getUserById = (req, res) => {
//   try {
//     const {id} = parseInt(req.params);
//     const index = findIndex(user,  id );

//     if (index !== -1) {
//       const foundUser = user[index];
//       res.status(200).send({
//         message: "User retrieved successfully",
//         user: foundUser,
//       });
//     } else {
//       res.status(404).send({
//         message: "User not found",
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       message: "Failed to retrieve user",
//     });
//   }
// };

export default {
  getAllUsers,
  getUserById,
};
