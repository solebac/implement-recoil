import React from "react";
import useAtualizarEventos from "../../../hooks/useAtualizarEventos";
import { IEvento } from "../../../interfaces/IEvento";

const EventoCheckbox: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {
  //Atualizando no states
  //Old const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  const atualizarEventos = useAtualizarEventos();

  const alterarStatus = () => {
    //evento.completo = !evento.completo;
    const eventoAlterado = { ...evento };
    eventoAlterado.completo = !eventoAlterado.completo;

    atualizarEventos(eventoAlterado);
    // Old setListaDeEventos((listaOld) => {
    //   const index = listaOld.findIndex((evt) => evt.id === evento.id);
    //   return [
    //     ...listaOld.slice(0, index),
    //     eventoAlterado,
    //     ...listaOld.slice(index + 1),
    //   ];
    // });
  };
  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  return <i className={estilos.join(" ")} onClick={() => alterarStatus()}></i>;
};

export default EventoCheckbox;
