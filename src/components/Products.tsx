import { useState, useEffect } from "react";
import{Link} from "react-router-dom"


function Products() {
  type  Products=
        {
          id: number,
          title: string,
          price: number
          description: string
          categoryId: number
          image: string
        }
    const[products, setProduct]=useState<Products[]>([])
    useEffect(()=>{
        fetch(`http://localhost:4000/products`)
        .then (resp=>resp.json())
        .then(productFromServer=>setProduct(productFromServer))
    }, [])
    return (
<main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
      {/* <!-- Single item --> */}
      {products.map(product=>(
      <li>
        <Link to={`/products/${product.id}`}>
        {/* <a href="/products/1" >*/}
          <article className="product-item">
            <img
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
          </article>
          {/* </a> */}
          </Link>
      </li>
      ))}
    </ul>
  </section>
</main>
);
}
export default Products;