
import type { FC } from 'react';
import { useCart } from '../../context/CardContext';
import { products } from '../../Data/Data';
import './Cart.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Cart: FC = () => {
  const { cart, getTotalPrice,addToCart, removeFromCart, clearItemFromCart } = useCart();

  return (
    <>
      <Header />
      <div className="cart">
        <h2 className="cart__title">Order</h2>
        {Object.keys(cart).length === 0 ? (
          <p className="cart__empty">No items in the cart</p>
        ) : (
          <>
            {Object.entries(cart).map(([itemId, quantity]) => {
              const item = products.find((i) => i.id === parseInt(itemId));
              return item ? (
                <div key={itemId} className="cart__item">
                  <img src={item.imageUrl} alt={item.name} className="cart__item-image" />
                  <span className="cart__item-name">{item.name}</span>
                  <span className="cart__item-quantity"> - Count: {quantity}</span>
                  <span className="cart__item-price"> - Price: {item.price * quantity} $</span>
                  <div className="cart__item-action">
                    <button
                      className="cart__item-action-decrement"
                      onClick={() => removeFromCart(parseInt(itemId))}
                      disabled={quantity <= 0}
                    >
                      -
                    </button>
                    <button
                      className="cart__item-action-delete"
                      onClick={() => clearItemFromCart(parseInt(itemId))}
                    >
                      Delete
                    </button>
                    <button
                      className="cart__item-action-increment"
                      onClick={() => addToCart(parseInt(itemId))}
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : null;
            })}
            <p className="cart__total">Total price: {getTotalPrice(products)} $</p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;