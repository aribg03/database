const {Router} = require('express');
const {usersList} = require('../controllers/users');

//http://localhost:3000/api/v1/users/?????
const router = Router();

router.get('/', usersList);

//router.post('/',usersList);
//router.put('/',usersList);
//router.patch('/',usersList);
//router.delete('/',usersList);

module.exports = router;