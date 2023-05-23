import { useSetRecoilState } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { listaDeEventosState } from "../state/atom";

const useExcluirEventos = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {

        setListaDeEventos((listaAntiga) => [
            ...listaAntiga.filter(evt => evento.id !== evt.id)
        ])
    }
}
export default useExcluirEventos;


