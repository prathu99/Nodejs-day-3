import { ObjectId } from 'mongodb';
import { client } from '../index.js';

// Inserting mentor to db

export async function createMentor(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .insertOne(data);
}

// Get mentors

export async function getMentors() {
    return await client.db('assignMentor')
        .collection('mentors')
        .find({})
        .toArray();
}

// Add multiple students to one mentor

export async function addStudents(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .updateOne({ _id: ObjectId(data.id) }, { $push: { students: ObjectId(data) } });
}

// Show all student for one mentor

export async function studentsForMentor(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .find({ _id: ObjectId(data.id) }, { name: 1, students: 1, _id: 0 })
        .toArray();
}