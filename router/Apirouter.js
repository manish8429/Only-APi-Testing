import express from "express";
import { data } from "../controllers/Data.js";

const Apirouter = express.Router();

Apirouter.get('/data',data )


export default Apirouter;