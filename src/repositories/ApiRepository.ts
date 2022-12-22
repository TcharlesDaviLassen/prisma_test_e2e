export interface ICreateApiDataPatterns {
    title: string;
    description?: string;
}


export interface ApiRepository {
    create(data: ICreateApiDataPatterns): Promise<void>;
}

