
import { ObjectId } from 'mongodb';
import { users } from '../database/conn.js'

export const getAllUsers = async (req, res) => {
    const allUsers = await users.find({}).toArray();
    return res.send({ status: 'OK', data: allUsers });
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await users.find({"_id" : new ObjectId(id)}).toArray();
    return res.send({ status: 'OK', data: user });
}

export const saveUser = async (req, res) => {
    const { name, lastname, age } = req.body
    const user = await users.insertOne({
        name, lastname, age
    });
    return res.send({ status: 'OK', data: user });
}