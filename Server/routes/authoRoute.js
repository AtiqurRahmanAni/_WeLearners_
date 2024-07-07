 const express = require('express');
 const router = express.Router();
 const cors = require('cors');
 const {test , registerUser , loginUser} = require("../controller/authoController");
 

 //middleware
    router.use(
        cors({
            credentials : true,
            origin : "http://localhost:5173"
        })
    )

router.get('/', test)
router.get('/user', loginUser)
router.post('/register', registerUser);

module.exports = router
