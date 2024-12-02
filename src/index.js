import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoMarcell = new Mago("Marcell", 4, "fogo", 4, 3);
const magoPietro = new Mago("Pietro", 5, "gelo", 7, 10);
const arqueiroNatalia = new Arqueiro("Natalia", 8, 7);
const ArqueiroMagoChico = new ArqueiroMago("chico", 7, 10, "ar", 4, 8);
const GuerreiroBira = new Guerreiro("Bira", 20);

const personagens = [
  magoMarcell,
  magoPietro,
  arqueiroNatalia,
  ArqueiroMagoChico,
  GuerreiroBira,
];

new PersonagemView(personagens).render();
// console.log(Personagem.verificarVencedor(arqueiroNatalia, magoMarcell));
console.log(arqueiroNatalia);
