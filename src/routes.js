import express from 'express'
import app from './app' 

let app = app; 
module.exports = app => {
    app.get('/' ,  (req,res ) => {
        res.send("Hello world")
    })
}