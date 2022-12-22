import { CreateApi } from "./CreateApi";
import { InMemoryApiRepository } from "../../test/repositories/InMemoryApiRepository";

//Colocando dentro de um describe para melhorar o fluxo

describe("InMemoryApiRepository service => ", () => {

    it("Test data Api whith not invalid title", async () => {
        const inMemoryApiRepository = new InMemoryApiRepository();

        //Teste unitário de camada única, não testa outras camadas como por exemplo banco de dados.
        const createApi = new CreateApi(inMemoryApiRepository);
        // create: async (data) => { }
        // });

        //Lança um erro caso o teste não estiver preenchido
        await expect(createApi.execute({ title: 'Nova aula' }))
            .resolves
            .not
            .toThrow();

        //Melhorando o teste.
        // O que basicamente diz esse codigo.
        //Que espera receber um item registrado da regra de interface, que ela seja igual a um array contendo um objeto, e nesse objeto contenha um titulo.
        expect(inMemoryApiRepository.items).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: 'Nova aula',
                })
            ])
        )
    })



    it("Test data Api with invalid title", async () => {
        const inMemoryApiRepository = new InMemoryApiRepository();

        //Teste unitário de camada única, não testa outras camadas como por exemplo banco de dados.
        const createApi = new CreateApi(inMemoryApiRepository);
        // create: async (data) => { }
        // });

        // Caso esteja em branco irá dar um erro, colocar o rejects porque a promise vai gerar um erro
        await expect(createApi.execute({ title: '' }))
            .rejects
            .toThrow();

        expect(inMemoryApiRepository.items).toEqual([])
    })

});
