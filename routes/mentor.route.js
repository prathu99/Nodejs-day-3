import express from 'express';
import { addStudents, createMentor, getMentors, studentsForMentor } from '../services/mentor.service.js';

const router = express.Router();

// Creating mentor;

router.post("/create", async (request, response) => {
    try {
        const data = request.body;
        const result = await createMentor(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Get mentors

router.get("/mentors", async (request, response) => {
    try {
        const result = await getMentors();
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Add nultiple students to one mentor

router.get("/mentor/:id", async (request, response) => {
    try {
        const data = request.params;
        const result = await addStudents(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

// Show all students for one mentor

router.get("/mentor/:id/mentor-students", async (request, response) => {
    try {
        const data = request.params;
        const result = await studentsForMentor(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});

export default router;