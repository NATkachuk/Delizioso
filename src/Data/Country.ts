import Germany from "../assets/ConfirmReserv/png/Germany.png";
import Brazil from "../assets/ConfirmReserv/png/Brazil.png";
import Australia from "../assets/ConfirmReserv/png/Australia.png";
import Canada from "../assets/ConfirmReserv/png/Canada.png";

  export interface Country {
    name: string;
    flag: string;
    code: string;
}

export const countries: Country[] = [
  { name: "Germany", flag: Germany, code: "+49" },
  { name: "Brazil", flag: Brazil, code: "+55" },
  { name: "Australia", flag: Australia, code: "+61" },
  { name: "Canada", flag: Canada, code: "+1" },
];

