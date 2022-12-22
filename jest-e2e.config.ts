import jestConfig from "./jest.config";

export default {
    ...jestConfig,


    testRegex: '.e2e-spec.ts$' //Vai procurar todos os arquivos com a estensão => .e2e-spec.ts
}