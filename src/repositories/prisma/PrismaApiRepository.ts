import { prismaConectionService } from "../../prisma";
import { ApiRepository, ICreateApiDataPatterns } from "../ApiRepository";

export class PrismaApiRepository implements ApiRepository {
    
    async create(data: ICreateApiDataPatterns) {
        await prismaConectionService.api.create({
            data: {
                title: data.title,
                description: data.description
            }
        })
    }
}