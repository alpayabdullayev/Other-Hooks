import React from 'react'
import { useCallback } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const phones = [
    {name:"Iphone 15",price:3000},
    {name:"SAMSUNG",price:2000},
    {name:"Xiaomi 13",price:1000}
]


const APP = () => {
    const [products] = useState(phones)
    const [cart, setCart] = useState([])

    

    const addToCart =useCallback( (product) =>{
        setCart((cart)=>[...cart,product])
    },[])

    const emptyCart = useCallback(() => {
        setCart([]);
    },[])

  return (
    <>
        <>
            <div className="main">
                <Products products={products} addToCart={addToCart} />
                <Cart cart={cart} addToCart={addToCart} emptyCart={emptyCart} />
            </div>
        </>

    </>
  )
}






export default APP

const Products = React.memo(({products,addToCart})=>{
    return(

        <>
            <h1>ALL PROUDCTS</h1>
            {
                products.map(({name,price})=>(
                    <Product name={name} price={price} addToCart={addToCart}/>
                ))
            }
        </>
    )
})

const Cart = React.memo(
    ({cart, addToCart, emptyCart}) => {
        return (
            <>
                <h1>BasketCarts  <button onClick={emptyCart}>Sebeti Clear All</button></h1>
                <div>
                    {
                        cart.map(({ name, price }) => (
                            <Product name={name} price={price} />
                        ))
                    }
                </div>
            </>
        )
    }
)


const Product = React.memo(({name,price,addToCart})=>{

    return(

        <>
            <h2>{name}</h2>
            <p>{price}</p>
            {
                addToCart && <button onClick={()=>addToCart({name,price})}>ADD</button>
            }
        </>
    )
})