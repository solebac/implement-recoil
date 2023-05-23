import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

//No conceito do React ele é composto por varios atomos. Cada pedaço do estado ele é um atomo.
/*export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [{
        descricao: "Estudar React",
        inicio: new Date("2023-04-20T09:00"),
        fim: new Date("2023-04-20T13:00"),
        completo: false,
        id: 1642342747,
    },
    {
        descricao: "Estudar Recoil",
        inicio: new Date("2023-04-21T09:00"),
        fim: new Date("2023-04-21T11:00"),
        completo: false,
        id: 1642342959,
    },]
})*/
export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})