import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = useCallback((product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const totalItems = useMemo(
    () => state.cart.reduce((sum, item) => sum + item.quantity, 0),
    [state.cart],
  );
  const totalPrice = useMemo(
    () => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.cart],
  );

  const value = {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
