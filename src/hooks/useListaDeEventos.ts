import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../state/seletores";

//Hook com retorno dos dados
const useListaDeEventos = () => {
    return useRecoilValue(eventosFiltradosState);
}
export default useListaDeEventos;