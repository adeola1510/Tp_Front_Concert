import { createContext, useState } from 'react';
import { productsData } from '../../data';
import { useEffect } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProduct] = useState(productsData);

  const searchProducts = (query)=>{
    if(query==''){
      setFilteredProduct(products)
    }else{
      const filtered = products.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredProduct(filtered)
    }
  }

  const [heroVisible, setHeroVisible] = useState(true)

  const [cart,setCart] = useState([])

  const [itemAmount, setItemAmount] = useState(0)

  const [total, setTotal] = useState(0)

  const addToCart = (product,id)=>{
   
    const newItem = {...product, amount:1}

    const cartItem = cart.find((item)=>{
      return item.id ===id;
    })  

    if (cartItem) {
      const newCart = [...cart].map((item)=>{
        if (item.id===id) {
          return {...item, amount:cartItem.amount + 1}
        }else {
          return item
        }
      });
      console.log(product);
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) =>{
    const newCart = cart.filter((item)=>{
      return item.id!==id;
    });
    setCart(newCart)
  }

  const clearCart = ()=>{
    setCart([]);
  }

  useEffect(
    ()=>{
      const total = cart.reduce((accumulation, currentItem)=>{
        const priceAsNumber = parseFloat(currentItem.price);
        if(isNaN(priceAsNumber)){
          return accumulation
        }
        return accumulation + priceAsNumber * currentItem.amount;
      }, 0)
      setTotal(total);
    }, [cart]
  );

  useEffect(
    ()=>{
      if (cart) {
        const amount = cart.reduce((accumulation, currentItem)=>{
          return accumulation + currentItem.amount;
        }, 0);
        setItemAmount(amount);
      }
    }, [cart]
  );

  const increaseAmount = (id)=>{
    const cartItem = cart.find((item)=>item.id ===id);
    addToCart(cartItem, id);
  }

  const decreaseAmount = (id) =>{
    const cartItem = cart.find((item)=>{
      return item.id ===id;
    })

    if (cartItem) {
      const newCart = cart.map((item)=>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount -1}
        }else {
         return item;
        }
        
      });
      setCart(newCart)
    } else if (cartItem.amount <1) {
        removeFromCart(id);
      }
  }

  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailStocke = localStorage.getItem("email");
    if (emailStocke) {
      setEmail(emailStocke);
    }
  }, []);

   const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    localStorage.setItem("email", value);
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLogin");
    if (login) {
      setIsLogin(login);
    }
  }, []);

  const handleChangeLogin = (e) => {
    const value = e.target.value;
    setIsLogin(value);
    localStorage.setItem("isLogin", value);
  };



  return (
    <ShopContext.Provider value={{isLogin, setIsLogin, email, setEmail,  cart, total, itemAmount  ,clearCart,addToCart, removeFromCart, increaseAmount, decreaseAmount, heroVisible,setHeroVisible, products,filteredProducts, searchProducts }}>
      {children}
    </ShopContext.Provider>
  );
};
