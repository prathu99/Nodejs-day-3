import { ObjectId } from 'mongodb';
import { client } from '../index.js';

// Inserting student to db

export async function createStudent(data) {
    return await client.db("assignMentor").
        collection("students").
        insertOne(data);
}

// Get students

export async function getStudents() {
    return await client.db("assignMentor")
        .collection("students")
        .find({})
        .toArray();
}

// Get student without mentor

export async function getStudentWithoutMentor() {
    return await client.db("assignMentor")
        .collection("students")
        .find({ mentor: undefined })
        .toArray();
}

// Select one student and assign mentor

export async function mentorAssign(data) {
    return await client.db("assignMentor")
        .collection("students")
        .updateOne({ _id: ObjectId(data.id) }, { name: 1, students: 1, _id: 0 })
        .toArray();
}