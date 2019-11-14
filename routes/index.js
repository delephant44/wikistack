const express = require('express')
const router = require('express').Router()
const layout = require('../views/layout.js')
 

router.get('/', (req, res) => {
    // test test
    console.log('hello World')
    res.send(layout())
})

module.exports = router