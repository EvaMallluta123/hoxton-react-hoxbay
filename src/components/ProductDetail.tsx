import { useState, useEffect } from "react";
import { Navigate,useParams } from "react-router-dom";
type  Products=
        {
          id: number,
          title: string,
          price: number
          description: string
          categoryId: number
          image: string
        }
        export function ProductDetail(){
            const[item, setItem]=useState<Products[]>([])

            const params=useParams()

            useEffect(()=>{
                fetch(`http://localhost:4000/products${params.id}`)
                .then (resp=>resp.json())
                .then(ItemFromServer=>setItem(ItemFromServer))
            }, [])

            if (item === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )

    if (item.id === undefined) return <Navigate to="/home" />

            return(
                <main>
{item.map(items=>(
<section className="product-detail main-wrapper">
    <img
      src={items.image}
      alt={items.title}
    />
    <div class="product-detail__side" style="border-color: var(--yellow)">
      <h3></h3>
      <h2>{items.title}</h2>
      <p>
        {items.description}
      </p>
      <p>{items.price}</p>
      {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
      <button>Add to basket</button>
    </div>
  </section>
  ))}
</main>

            )
        }