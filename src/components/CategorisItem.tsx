import { useState, useEffect } from "react";
import{Link} from "react-router-dom"
import { Navigate,useParams } from "react-router-dom";


export function CategoriesItem (){

    type  Products=
        {
          id: number,
          title: string,
          price: number
          description: string
          categoryId: number
          image: string
        }
    const[products, setProducts]=useState<Products[]>([])
    const params=useParams()


        useEffect(()=>{
            fetch(`http://localhost:4000/products?_expand=category&categoryId=${params.id}`)
            .then (resp=>resp.json())
            .then(productFromServer=>setProducts(productFromServer))
        }, []) 
        const FilteredProducts=products.filter(product=>product.categoryId===product.id)
    return(
        <main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
      {/* <!-- Single item --> */}
      {FilteredProducts.map(product=>(
      <li>
        <Link to={`/products/${product.id}`}>
    
          <article className="product-item">
            <img
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
          </article>
          
          </Link>
      </li>
      ))}
    </ul>
  </section>
</main>

    )
}