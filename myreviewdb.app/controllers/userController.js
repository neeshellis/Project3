// "use strict";
// const Models = require("../models");
// // finds all users in DB, then sends array as response
// const getUsers = (res) => {
// Models.User.findAll({}).then(data => {
// res.send({result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }
// // uses JSON from request body to create new user in DB
// const createUser = (data, res) => {
// Models.User.create(data).then(data => {
// res.send({ result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }

// // updates the user matching the ID from the param using JSON data POSTed in request body
// const updateUser = (req, res) => {
//   console.log(req.body);
//   Models.User.update(req.body, {
//     where: { id: req.params.id },
//     returning: true // For PostgreSQL to return updated record
//   })
//   .then(([rowsUpdated, [updatedUser]]) => {
//     if (rowsUpdated === 0) {
//       res.send({result: 404, error: "User not found"});
//     } else {
//       res.send({result: 200, data: updatedUser});
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({result: 500, error: err.message});
//   })
// }


// // deletes the user matching the ID from the param
// const deleteUser = (req, res) => {
//   Models.User.destroy({
//     where: { id: req.params.id }
//   })
//   .then(deletedRows => {
//     if (deletedRows === 0) {
//       res.send({result: 404, error: "User not found"});
//     } else {
//       res.send({result: 200, data: `User with id ${req.params.id} deleted successfully`});
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({result: 500, error: err.message});
//   })

// }


// module.exports = {
// getUsers, createUser, updateUser, deleteUser,
// }

"use strict";
const { where } = require("sequelize");
const Models = require("../models");

// finds all users in DB, then sends array as response
const getUsers = (res) => {
Models.User.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
Models.User.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

const updateUser = (req, res) => {
// updates the user matching the ID from the param using JSON data POSTed in request body
console.log(req.body)
Models.User.update(req.body, { where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const deleteUser = (req, res) => {
// deletes the user matching the ID from the param
Models.User.destroy({ where: {id: req.params.id}})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

module.exports = {
getUsers, createUser, updateUser, deleteUser
}





