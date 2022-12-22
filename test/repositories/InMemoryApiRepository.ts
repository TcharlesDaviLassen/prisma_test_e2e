import { api } from "@prisma/client";
import cripto from 'node:crypto'

import { ApiRepository, ICreateApiDataPatterns } from "../../src/repositories/ApiRepository";

//Roda somente em memoria local depois do serviço terminar os dados serão apagados.
export class InMemoryApiRepository implements ApiRepository {
    public items: api[] = [];

    async create(data: ICreateApiDataPatterns) {
        this.items.push({
            id: cripto.randomUUID(),
            title: data.title,
            description: data.description ?? null
        });
    }
}