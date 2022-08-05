import { useState, useEffect } from "react";
import { Navigate,useParams } from "react-router-dom";
import{Link} from "react-router-dom"
type  Products=
        {
          id: number,
          title: string,
          price: number
          description: string
          categoryId: number
          image: string
        }
export function Basket(){
        const[item, setItem]=useState<null | Products> (null)
        const params=useParams()

        useEffect(()=>{
            fetch(`http://localhost:4000/products/${params.id}`)
            .then (resp=>resp.json())
            .then(ItemFromServer=>setItem(ItemFromServer))
        }, [])
    return(
      <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {/* <!-- Basket Item --> */}
          <li>
            <article className="basket-container__item">
              <img
                src={item?.image}
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                width="90"
              />
              <p>{item?.title}</p>
              <p>
                Qty:
                <select
                  ><option value="0">0</option
                  ><option value="1">1</option
                  ><option value="2">2</option
                  ><option value="3">3</option></select
                >
              </p>
              {/* <!-- The item total is calculated using the Qty selected value --> */}
              <p>Item total: {item?.price}</p>
            </article>
          </li>
          {/* <!--  --> */}
        </ul>
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £{item?.price}</h3>
      </section>
    </main>

    )
}