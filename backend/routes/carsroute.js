const express = require('express')
const {getCars, getCar, postCar, deleteCar}=require('../controller/controller')
const router =express.Router()


router.get('/',getCars)
router.get('/:id',getCar)
router.post('/',postCar)
router.delete('/:id',deleteCar)

module.exports = router
