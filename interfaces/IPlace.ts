/*
export interface IPlace {
    id: string;
    name: string;
    site: string;
    address: string;
    image: string;
    ticket: string;
    description: string;
    status: string;
    categoryId: string[];
}
*/

export interface IPlace {
    id: number;
    name: string;
    site: string;
    address: string;
    image: string;
    ticket: string;
    description: string;
    categoryId: number[];
}

category: [3],
            name: "Avenida Paulista",
            site: "",
            address: "Av. Paulista, 1578 - Bela Vista",
            city: "São Paulo",
            state: "SP",
            cep: "01310-200",
            urlImage: "assets/images/gallery/avenida-paulista.jpg",
            description: "Possuí museus, planetários, auditórios, e áreas de lazer com ciclovias e quadras.",
            longitudeLatitude: "-23.5614955,-46.6565725",
            ingresso: {
                inteira: 0,
                meia: 0
            },
            link