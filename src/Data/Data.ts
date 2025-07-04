import Spaghetti from '../assets/Homepage/png/Spaghetti.png'
import Gnocchi from '../assets/Homepage/png/Gnocchi.png'
import Ravioli from '../assets/Homepage/png/Rovioli.png'
import PenneAllaVodka from '../assets/Homepage/png/PenneAllaVodak.png'
import Risoto from '../assets/Homepage/png/Risoto.png'
import SplizzaSignature from '../assets/Homepage/png/SplitzaSignature.png'
export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  { id: 1, name: 'Spaghetti', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Spaghetti },
  { id: 2, name: 'Gnocchi', description: 'Lorem ipsum dolor sit amet, consecte...',  imageUrl:Gnocchi  },
  { id: 3, name: 'Ravioli', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Ravioli },
  { id: 4, name: 'Penne Alla Vodka', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: PenneAllaVodka },
  { id: 5, name: 'Risoto', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Risoto },
  { id: 6, name: 'Splizza Signature', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: SplizzaSignature },
];