const {Router} = require('express');
const {usersList, listUserByID} = require('../controllers/users');

//http://localhost:3000/api/v1/users/?
const router = Router();

router.get('/', usersList);
router.get('/:id',listUserByID);

//router.post('/',usersList);
//router.put('/',usersList);
//router.patch('/',usersList);
//router.delete('/',usersList);

module.exports = router;