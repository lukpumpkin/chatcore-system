// flow com estado por usuário
export function stateFlow(text, session) {

  // estado inicial
  if (session.state === "default") {

    // usuário pede menu
    if (text === "menu") {
      session.state = "menu";

      return (
        "Posso ajudar com:\n" +
        "- suporte\n" +
        "- vendas\n" +
        "Digite o que você precisa"
      );
    }
  }

  // usuário já está no menu
  if (session.state === "menu") {

    // escolheu suporte
    if (text === "suporte") {
      session.state = "default";
      return "Perfeito! Você escolheu suporte.";
    }

    // escolheu vendas
    if (text === "vendas") {
      session.state = "default";
      return "Beleza! Você escolheu vendas.";
    }

    // qualquer outra coisa
    return "Digite exatamente: suporte ou vendas";
  }

  // fallback geral
  return "Digite 'menu' para começar";
}
