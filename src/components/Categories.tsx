import '../App.css'
import{Link} from "react-router-dom"

export function Categories(){
    return(
        <main>
  <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
      {/* <!-- Single category --> */}
<
li>
        {/* <!-- Use the Link component from React Router to create  */}
              {/* the anchor tags */}
        {/* --> */}
        <Link to="/categories/1">electronics</Link>
      </li>
      {/* <!--  --> */}
      <li>
      <Link to="/categories/2">jewelery</Link>

      </li>
      {/* <!--  --> */}
      <li>
        <Link to="/categories/3">men's clothing</Link>
      </li>
      {/* <!--  --> */}
      <li>
        <Link to="/categories/4">women's clothing</Link>
      </li>
      {/* <!--  --> */}
    </ul>
  </section>
</main>


    )
}