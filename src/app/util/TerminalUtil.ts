import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static titulo(texto: string) {
    terminal.clear();
    terminal.magenta(`${texto}\n`);
    terminal.magenta(`-`.repeat(texto.length) + `\n`);
  }

  static async confirmacao(texto: string): Promise<boolean> {
    terminal.yellow(`\n${texto}`);
    const resposta = await terminal.singleLineMenu(["Sim", "Não"]).promise;
    return resposta.selectedIndex === 0;
  }

  static async menu(opcoes: string[]): Promise<[number, string]> {
    const resposta = await terminal.singleColumnMenu(opcoes).promise;
    return [resposta.selectedIndex, resposta.selectedText];
  }

  static async selecao(
    texto: string,
    opcoes: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`\n${texto}`);
    const resposta = await terminal.singleLineMenu(opcoes).promise;
    return [resposta.selectedIndex, resposta.selectedText];
  }

  static async limpar() {
    terminal.clear();
  }
}