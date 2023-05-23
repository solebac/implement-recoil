import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

//Criando um estado derivado
export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter((evt) => {
            if (!filtro.data) {
                return true; //retorna todos eventos
            }
            //"2023-12-01T..."
            const ehOMesmoDia =
                filtro.data.toISOString().slice(0, 10) ===
                evt.inicio.toISOString().slice(0, 10);
            return ehOMesmoDia;
        });
        return eventos

    }
})

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respHttp = await fetch('http://localhost:8080/eventos')
        const eventosJson: IEvento[] = await respHttp.json();
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})