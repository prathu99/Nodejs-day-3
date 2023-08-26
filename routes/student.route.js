import express from 'express';
import { createStudent, getStudents, getStudentWithoutMentor, mentorAssign } from '../services/student.service.js';

const router = express.Router();

// Create student

router.post("/create", async (request, response) => {
    try {
        const data = request.body;
        const result = await createStudent(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Get all students

router.get("/students", async (request, response) => {
    try {
        const result = await getStudents();
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Get student without a mentor

router.get("/no-mentor", async (request, response) => {
    try {
        const result = await getStudentWithoutMentor();
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Select one student and assign mentor

router.put("/student/:id", async (request, response) => {
    try {
        const data = request.body;
        const result = await mentorAssign(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});


export default router;