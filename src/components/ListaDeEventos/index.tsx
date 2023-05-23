import React from "react";
import useListaDeEventos from "../../hooks/useListaDeEventos";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC = () => {
  const eventos = useListaDeEventos();
  // const todosOsEventos = useListaDeEventos();
  // //Obter o filtro
  // const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos);
  // const eventos = todosOsEventos.filter((evt) => {
  //   if (!filtro.data) {
  //     return true; //retorna todos eventos
  //   }
  //   //"2023-12-01T..."
  //   const ehOMesmoDia =
  //     filtro.data.toISOString().slice(0, 10) ===
  //     evt.inicio.toISOString().slice(0, 10);
  //   return ehOMesmoDia;
  // });

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
