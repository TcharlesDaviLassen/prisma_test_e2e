// Services como casos de uso, funcionalidade da aplicação.

import { ApiRepository } from "../repositories/ApiRepository";

//Arquitetura em camadas as vezes tem as mesmas entidades.
//Quais dados esse service vai receber.
interface CreateApiRequest {
    title: string,
    description?: string
}


//Command/Query Segregations.
//Ações Escrita/Update/Delete Não se traz retorno (comandos).
//Ações de Query tras retornos.


//Inversão de dependencias.
export class CreateApi {
    constructor(
        private apiServiceRepository: ApiRepository,
    ) { }

    // Se comunica com a ApiRepository.
    async execute({ title, description }: CreateApiRequest) {

        //Aqui pode se fazer verificações e validações de dados.
        if(!title){
            throw new Error("Titulo é necessário")
        }

        await this.apiServiceRepository.create(
            {
                title,
                description
            }
        )
    }
} 
