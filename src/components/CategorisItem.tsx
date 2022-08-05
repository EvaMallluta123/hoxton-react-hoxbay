import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";


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
        type Categories={
             id: number,
            name: string 
        }
    const [item, setItem]=useState<null | Categories> (null)

    useEffect(()=>{
        fetch(`http://localhost:4000/categories/${params.id}`)
        .then (resp=>resp.json())
        .then(ItemFromServer=>setItem(ItemFromServer))
    }, [])

    const params=useParams()

    const[products, setProducts]=useState<Products[]>([])

    useEffect(()=>{
        fetch(`http://localhost:4000/products`)
        .then (resp=>resp.json())
        .then(productFromServer=>setProducts(productFromServer))
    }, []) 
        const FilteredProducts=products.filter(product=>product.categoryId===item?.id)
    return(
        <main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
      {/* <!-- Single item --> */}
      {FilteredProducts.map(product=>(
        
    
      <li>
        {/* <Link to={`/products/${product.id}`}> */}
    
          <article className="product-item">
            <img
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
          </article>
          
          {/* </Link> */}
      </li>
      ))}
    </ul>
  </section>
</main>

    )
}