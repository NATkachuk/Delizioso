import Spaghetti from '../assets/Homepage/png/Spaghetti.png'
import Gnocchi from '../assets/Homepage/png/Gnocchi.png'
import Ravioli from '../assets/Homepage/png/Rovioli.png'
import PenneAllaVodka from '../assets/Homepage/png/PenneAllaVodak.png'
import Risoto from '../assets/Homepage/png/Risoto.png'
import SplizzaSignature from '../assets/Homepage/png/SplitzaSignature.png'
import BloodyMary from '../assets/Homepage/png/BloodyMary.png'
import CakeWithNicota from '../assets/Homepage/png/CakeWithNicotta.png'
import CapreseCake from '../assets/Homepage/png/CapreseCake.png'
import Fritbata from '../assets/Homepage/png/Fritbata.png'
import Lasabna from '../assets/Homepage/png/Lasabna.png'
import Negroni from '../assets/Homepage/png/Negroni.png'
import Screwdriver from '../assets/Homepage/png/Screwdriver.png'
import Tiramusu from '../assets/Homepage/png/Tiramusu.png'
import Cabrese from '../assets/Homepage/png/Сabrese.png'
export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: 'Spaghetti', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Spaghetti, category: 'Lunch', price: 12.99 },
  { id: 2, name: 'Gnocchi', description: 'Lorem ipsum dolor sit amet, consecte...',  imageUrl:Gnocchi, category: 'Dinner', price: 12.99 },
  { id: 3, name: 'Ravioli', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Ravioli, category: 'Dinner', price: 12.99 },
  { id: 4, name: 'Penne Alla Vodka', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: PenneAllaVodka, category: 'Lunch', price: 12.99 },
  { id: 5, name: 'Risoto', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Risoto, category: 'Dinner', price: 12.99 },
  { id: 6, name: 'Splizza Signature', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: SplizzaSignature, category: 'Lunch', price: 12.99 },
  { id: 7, name: 'Bloody Mary', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: BloodyMary, category: 'Drink' , price: 12.99},
  { id: 8, name: 'Cake With Nicota', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: CakeWithNicota, category: 'Dessert', price: 12.99 },
  { id: 9, name: 'Caprese Cake', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: CapreseCake, category: 'Dessert', price: 12.99 },
  { id: 10, name: 'Fritbata', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Fritbata, category: 'Lunch', price: 12.99 },
  { id: 11, name: 'Lasabna', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Lasabna, category: 'Dinner', price: 12.99 },
  { id: 12, name: 'Negroni', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Negroni, category: 'Drink', price: 12.99 },
  { id: 13, name: 'Screwdriver', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Screwdriver, category: 'Drink', price: 12.99 },
  { id: 14, name: 'Tiramusu', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Tiramusu, category: 'Dessert', price: 12.99 },
  { id: 15, name: 'Cabrese', description: 'Lorem ipsum dolor sit amet, consecte...', imageUrl: Cabrese, category: 'Lunch', price: 12.99 },
];