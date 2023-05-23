import { useSetRecoilState } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { listaDeEventosState } from "../state/atom";
import { obterId } from "../util";

const useAdicionarEventos = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        const hoje = new Date();

        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser cadastrados com a data menor que a atual.")
        }
        evento.id = obterId();
        return setListaDeEventos(listaOld => [...listaOld, evento])
    }

}
export default useAdicionarEventos;