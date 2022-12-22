import express from "express";
import { PrismaApiRepository } from "./repositories/prisma/PrismaApiRepository";
import { CreateApi } from "./services/CreateApi";

export const app = express();

app.use(express.json());


app.post('/api', async (req, res) => {
    const { title, description } = req.body;

    const prismaApiRepository = new PrismaApiRepository(); // Ta se comunicando com o banco
    const createApi = new CreateApi(prismaApiRepository);

    try {

        await createApi.execute({ title, description });

        return res.status(201).send('Chegou aqui');
    } catch (err: any) {
        return res.status(404).json(
            {
                error: err.message
            }
        );
    }


});


