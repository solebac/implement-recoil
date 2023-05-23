import { useSetRecoilState } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { listaDeEventosState } from "../state/atom";

const useAtualizarEventos = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setListaDeEventos((listaOld) => {
            const index = listaOld.findIndex((evt) => evt.id === evento.id);
            return [
                ...listaOld.slice(0, index),
                evento,
                ...listaOld.slice(index + 1),
            ];
        })
    }
}
export default useAtualizarEventos;