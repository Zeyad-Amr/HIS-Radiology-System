const router = require("express").Router();
const authn = require("../middlewares/authn");
const authz = require("../middlewares/authz");
const usersController = require("../controllers/usersController");

/**
   * @api {get} /users GET/ users
   * @apiName GetAllUsers
   * @apiGroup Users Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object[]} Users A list of all users in db 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) usersNotFound error occur when there is no users stored in db
   * @apiHeader (Header) {String} auth-token the token of the user loged in
   * @apiSampleRequest http://127.0.0.1:4000/api/users
   * @apiSuccessExample sample:
   *[
    {
        "id": 38,
        "username": "ahmed12",
        "email": "ahmed@gmail.com",
        "password": "$2b$10$gtBpvEWanBq8Mc.qL1sBSOmC2fniMpV1Yy.29lviH7ALbWjG6wnRS",
        "create_time": "2022-05-26T21:35:04.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893213",
        "address": null,
        "role": "patient"
    },
    {
        "id": 39,
        "username": "users",
        "email": "users@gmail.com",
        "password": "$2b$10$/nS/3QOg8xgx6SmECwDitOzjUoh3IggMMvaqj04wWxvCK.5AVOcyi",
        "create_time": "2022-05-27T15:18:17.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893222",
        "address": null,
        "role": "patient"
    },
    {
        "id": 42,
        "username": "users3",
        "email": "users@gmail.com",
        "password": "$2b$10$zXmn965cKgpV6mlS.gAg3OHVYo4xS9RVkO7rZiSQ/zJwCsEvt8k8G",
        "create_time": "2022-05-27T21:42:02.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893224",
        "address": null,
        "role": "patient"
    },
    {
        "id": 43,
        "username": "users4",
        "email": "users@gmail.com",
        "password": "$2b$10$AGcLlpAL.Av9vS9KVo5zWOCgnIiEFvb7J4ckZHTcp1MDyz16M.6Be",
        "create_time": "2022-05-27T21:43:49.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893225",
        "address": null,
        "role": "patient"
    },
    {
        "id": 46,
        "username": "users6",
        "email": "users@gmail.com",
        "password": "$2b$10$rGCAOLU5zPzKZrsNDi7GP.Rq53cM7Ew7dunfiVcIm9yyTi6CIrmtu",
        "create_time": "2022-05-28T11:40:13.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893227",
        "address": null,
        "role": "patient"
    },
    {
        "id": 48,
        "username": "users7",
        "email": "users@gmail.com",
        "password": "$2b$10$kFW7H7u02vN6Q0Jxd3cJQOnAZ60uRlmOoErAOujOvshj7e3bCe7BW",
        "create_time": "2022-05-28T11:42:27.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893228",
        "address": null,
        "role": "patient"
    },
    {
        "id": 51,
        "username": "omar12",
        "email": "ahmed@gmail.com",
        "password": "$2b$10$49RO05cDFcvHj3ZD1E2sqOYaLZ/0HCB4zB0JDQ8WOgWZGZuZ.ISde",
        "create_time": "2022-05-28T15:28:47.000Z",
        "fname": "ahmed",
        "lname": "raouf",
        "bdate": null,
        "gender": null,
        "phone": 1067662457,
        "SSN": "01234567893221",
        "address": null,
        "role": "doctor"
    },
    {
        "id": 56,
        "username": "users8",
        "email": "users@gmail.com",
        "password": "$2b$10$UYOzpxv4pMj9/0.gH9dLDureD2RhAeMWGmOBu.ctghLzz6FVnV3uy",
        "create_time": "2022-05-29T20:01:58.000Z",
        "fname": null,
        "lname": null,
        "bdate": null,
        "gender": null,
        "phone": null,
        "SSN": "01234567893229",
        "address": null,
        "role": "doctor"
    }
]
*/
//get users
router.get("/users", [authn, authz("Admin")], usersController.getAllUsers);

/**
   * @api {get} /users/:id GET/ users/:id
   * @apiName GetSingleUser
   * @apiGroup Users Router
   * @apiVersion 1.0.0
   * @apiSuccess {Object} User An object of the user w/ given id 
   * @apiError (Error 400) valdiationError Something wrong with the body of the request 
   * @apiError (Error 404) usersNotFound error occur when there is no users w/ given id
   * @apiHeader (Header) {String} auth-token the token of the user loged in
   * @apiParam {String} id id of the users
   * @apiSampleRequest http://127.0.0.1:4000/api/users/51
   * @apiSuccessExample sample:
   * {
        "id": 51,
        "username": "omar12",
        "email": "ahmed@gmail.com",
        "password": "$2b$10$49RO05cDFcvHj3ZD1E2sqOYaLZ/0HCB4zB0JDQ8WOgWZGZuZ.ISde",
        "create_time": "2022-05-28T15:28:47.000Z",
        "fname": "ahmed",
        "lname": "raouf",
        "bdate": null,
        "gender": null,
        "phone": 1067662457,
        "SSN": "01234567893221",
        "address": null,
        "role": "doctor"
    }
*/
//get one user
router.get("/users/:id", authn, usersController.getOneUser);

/**
 * @api {post} /users POST/ users
 * @apiName PostUser
 * @apiGroup Users Router
 * @apiVersion 1.0.0
 * @apiSuccess {object}  User An object of the user created
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiBody {String} username The usernaem must be more than 6 char
 * @apiBody {String} email The email of the user
 * @apiBody {String} password The password more than 8 char must have at least 1 uppercase 1 lowercase 1 number
 * @apiBody {String} confirm_password The password more than 8 char must have at least 1 uppercase 1 lowercase 1 number
 * @apiBody {String} fname The first name of the user
 * @apiBody {String} lname The last name of the user
 * @apiBody {String} gender The gender of the user (male or female not any thing else)
 * @apiBody {String} SSN The social security number of the user (national id)
 * @apiBody {String} address The address of the user
 * @apiBody {String} country The country the user from
 * @apiBody {Date} bdate The date of the holidays the employee take
 * @apiBody {String} phone The id of the depeartemnt the employee works at
 * @apiSampleRequest http://127.0.0.1:4000/api/users
 * @apiSuccessExample message:
 * {
    "id": 82,
    "username": "ahmedraouf4",
    "email": "ahmed@gmail.com",
    "password": "$2b$10$u5zEIOppgw4hx4TUVXNHwuhQW0p1JPnJO0G4KLTHehKmFneRL5jRC",
    "create_time": "2022-06-01T16:47:39.000Z",
    "fname": "ahmed",
    "lname": "raouf",
    "bdate": "2001-07-11T21:00:00.000Z",
    "gender": "male",
    "phone": "01067662457",
    "SSN": "01234567893249",
    "address": "5 hasan el saban fisl giza",
    "role": "patient",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIsImlhdCI6MTY1NDEwMjA1OX0.Ttaqb9eU45LaW6dlN31Qr_XK8-wrxp7G-ELMbRzSIxs"
}
 *
 */
//create a user
router.post("/users", usersController.createUser);

/**
 * @api {put} /users PUT/ users
 * @apiName PutUser
 * @apiGroup Users Router
 * @apiVersion 1.0.0
 * @apiSuccess {String} ok
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) usersNotFound error occur when there is no users w/ given id
 * @apiError (Error 403) notAuthorized error occurs when user try to edit something admin oly can edit
 * @apiHeader (Header) {String} auth-token the token of the user loged in
 * @apiBody {String} username The usernaem must be more than 6 char
 * @apiBody {String} email The email of the user
 * @apiBody {String} password The password more than 8 char must have at least 1 uppercase 1 lowercase 1 number
 * @apiBody {String} fname The first name of the user
 * @apiBody {String} lname The last name of the user
 * @apiBody {String} gender The gender of the user (male or female not any thing else)
 * @apiBody {String} SSN The social security number of the user (national id)
 * @apiBody {String} address The address of the user
 * @apiBody {Date} bdate The date of the holidays the employee take
 * @apiBody {String} phone The id of the depeartemnt the employee works at
 * @apiBody {String} role The role of the user (only admin can edit)
 * @apiSampleRequest http://127.0.0.1:4000/api/users
 * @apiSuccessExample sample:
 * ok
 *
 */

//edit users
router.put("/users/:id", authn, usersController.editUser);

/**
 * @api {delete} /users/:id DELETE/ users/:id
 * @apiName DeleteSingleUser
 * @apiGroup Users Router
 * @apiVersion 1.0.0
 * @apiSuccess {String} ok
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiError (Error 404) usersNotFound error occur when there is no users w/ given id
 * @apiHeader (Header) {String} auth-token the token of the user loged in
 * @apiParam {String} id id of the users
 * @apiSampleRequest http://127.0.0.1:4000/api/users/51
 * @apiSuccessExample sample:
 * ok
 */
//delete users
router.delete(
  "/users/:id",
  [authn, authz("Admin")],
  usersController.deleteUser
);

module.exports = router;
