import {  Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error: any) {
        res.status(500).json({ error: `Error fetching projects: ${error.message}` });
    }
};

export const createProjects = async (req: Request, res: Response): Promise<void> => {
    console.log('req.body:', req.body); 
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProjects = await prisma.project.create({
            data: {
                name,
                description,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            },
        });
        res.status(201).json(newProjects);
    } catch (error: any) {
        res.status(500).json({ error: `Error creating projects: ${error.message}` });
    }
};

