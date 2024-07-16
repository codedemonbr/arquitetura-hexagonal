import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "@/core/usuario/model/Usuario";
import Produto from "../model/Produto";

type Entrada = {
  produtoId: string;
  usuario: Usuario;
};

export default class ObterProdutoPorId implements CasoDeUso<Entrada, Produto> {
  async executar(entrada: Entrada): Promise<Produto> {
    return {
      id: entrada.produtoId,
      nome: "Produto 1",
      preco: 10.9,
      consultadoPor: entrada.usuario.email,
    };
  }
}
