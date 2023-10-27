const {Router} = require('express');
const {usersList, listUserByID, addUser, modifyUser, deleteUser, signIn} = require('../controllers/users');
const { addRow } = require('../models/users');

//http://localhost:3000/api/v1/users/?
const router = Router();

router.get('/', usersList);
router.get('/:id',listUserByID);
router.post('/',signIn);
router.put('/',addUser);
router.patch('/:id',modifyUser);
router.delete('/:id',deleteUser);

module.exports = router;