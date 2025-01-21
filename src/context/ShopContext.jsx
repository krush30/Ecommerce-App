import { createContext, useEffect, useState } from "react"
import {products} from '../assets/assets'
import { toast } from "react-toastify";
export const ShopContext = createContext();

export const ShopContextProvider = (props)=>{

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState(''); 
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(ItemId, size)=>{

        if(!size){
            toast.error('Select Product size')
            return;
        }
        let cartData = structuredClone(cartItems)


        if(cartData[ItemId]){
            if(cartData[ItemId][size]){
                cartData[ItemId][size] += 1;

            }else{
                cartData[ItemId][size] = 1;
            }
        }else{
            cartData[ItemId] = {};
            cartData[ItemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items] ){
                try {
                    if(cartItems[items][item]> 0){
                        totalCount += cartItems[items][item]
                    }
        
                } catch (error) {
                    console.error(error.message);
                    
                }
            }
        }
        return totalCount
    }


   

    const value = {
        products,
        currency,
        delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart, getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}