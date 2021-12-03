import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { IPlace } from '../../interfaces/IPlace';
import Categories from './Categories';
import Place from './Place';

interface PlacesProps {
    title: string;
}

const Places = (props: PlacesProps) => {

    const [places, setPlaces] = useState<IPlace[]>([]);
    
    useEffect(() => {

        getPlaces();

    }, []);

    const getPlaces = async () => {

        // const places = await axios.get('https://besp.westcentralus.cloudapp.azure.com/places');
        const myDatabase: IPlace[] = [{
            id: 1,
            categoryId: [1],
            name: "Museu de Arte de São Paulo",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/masp.jpg",
            description: "Museu de Arte de São Paulo Assis Chateaubriand é uma das mais importantes instituições culturais brasileiras.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/o5oqNtZZo2dmugkCA"
        }, {
            id: 2,
            categoryId: [3],
            name: "Theatro Municipal",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/theatro-municipal.jpg",
            description: "Considerado um cartão postal da cidade mais populosa do Brasil, o Teatro Municipal de São Paulo é um dos mais importantes lugares históricos da capital paulista.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/9d1rRj583Jbv7H4JA"
        }, {
            id: 3,
            categoryId: [1, 3],
            name: "Museu do Videogame",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/museu-videogame.jpg",
            description: "Com base no estado da arte da produção e recepção de games, esta pesquisa tem como objetivo propor a construção de um museu do jogo concebido no sentido de produzir uma experiência gamificada para quem o visita.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/HyHmZknqwoZDHccCA"
        }, {
            id: 4,
            categoryId: [3],
            name: "Parque Ibirapuera",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/parque-ibirapuera.jpg",
            description: "O Parque Ibirapuera é um parque urbano localizado na cidade de São Paulo, Brasil. Em 2017, foi o parque mais visitado da América Latina.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/1mAXkMP1m2KbySWaA"
        }, {
            id: 5,
            categoryId: [4],
            name: "Autódromo de Interlagos",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/autodromo-interlagos.jpg",
            description: "O Autódromo José Carlos Pace é um autódromo municipal localizado no distrito de Cidade Dutra, na cidade de São Paulo, Brasil.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/752uFkSKjuCVfoC89"
        }, {
            id: 6,
            categoryId: [2, 3],
            name: "Beco do Batman",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/beco-batman.jpg",
            description: "Pequena área de becos de paralelepípedos conhecida por grafites coloridos que decoram os muros.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/qfcy6sKb4yFdroKL8"
        }, {
            id: 7,
            categoryId: [2],
            name: "Pinacoteca de São Paulo",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/pinacoteca.jpg",
            description: "A Pinacoteca do Estado de São Paulo é um dos mais importantes museus de arte do Brasil. Ocupa um edifício construído em 1900, no Jardim da Luz, centro de São Paulo.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/29GxZUXT8Jav5rf38"
        }, {
            id: 8,
            categoryId: [3],
            name: "Aquário de São Paulo",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/aquario.jpg",
            description: "Aquário de São Paulo é um oceanário localizado no distrito do Ipiranga, zona sudeste da cidade de São Paulo, Brasil.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/fZkFGdw3EvXfk9sM6"
        }, {
            id: 9,
            categoryId: [3],
            name: "Avenida Paulista",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/avenida-paulista.jpg",
            description: "A Avenida Paulista é um dos logradouros mais importantes do município de São Paulo, a capital do estado homônimo.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/gDchYCW8ciwRmTrp8"
        }, {
            id: 10,
            categoryId: [5],
            name: "Mercado Municipal de São Paulo",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/mercado-municipal.jpg",
            description: "Prédio histórico com praça de alimentação e boxes que vendem frutas raras, verduras, legumes e laticínios.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/vypLD1uuwKdcTJPr5"
        }, {
            id: 11,
            categoryId: [5],
            name: "Restaurante Président",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/president-erick-jacquin.jpg",
            description: "Local elegante com decoração suntuosa que serve pratos contemporâneos da alta gastronomia francesa.",
            ticket: "R$ 0,00",
            site: "https://g.page/president-jacquin?share"
        }, {
            id: 12,
            categoryId: [1, 4],
            name: "Museu do Futebol",
            address: "Av. Paulista, 1578 - Bela Vista",
            image: "assets/images/gallery/museu-do-futebol.jpg",
            description: "Museu do Futebol é um espaço voltado para os mais diferentes assuntos envolvendo a prática, a história e curiosidades do futebol brasileiro e mundial.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/M7tGvcYAm5Tp6ChE7"
        }, {
            id: 13,
            categoryId: [1, 3],
            name: "Museu do Ipiranga",
            address: "Av. Paulista, 1578 - Bela Vista",            
            image: "assets/images/gallery/museu-do-ipiranga.jpg",
            description: "Museu do Ipiranga  é o museu público mais antigo da cidade de São Paulo, cuja sede é um monumento-edifício que faz parte do conjunto arquitetônico do Parque da Independência.",
            ticket: "R$ 0,00",
            site: "https://goo.gl/maps/61WZCMT5jFwEzftQ9"
        }];

        setPlaces(myDatabase);

    }

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Categories />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}                
            >
                {places.map((item) => (
                    <Place place={item} />
                ))}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
    },
});

export default Places;