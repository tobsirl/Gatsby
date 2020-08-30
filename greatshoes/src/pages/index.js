import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../assets/scss/index.scss"

// export default ({ data }) => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     <Img fixed={data.file.childImageSharp.fixed} />
//   </div>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "shoe-1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <div>
      <header class="hero">
        <div class="container">
          <h1 class="hero__title">Amazing Shoes at an amazing price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa?
          </p>
          <a href="#" className="btn"></a>
        </div>
      </header>

      <main>
        <section class="featured">
          <div class="container">
            <h2 class="section-title">Featured products</h2>
            <div class="split">
              <a href="" class="featured__item">
                <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="Shoe 1"
                  className="featured__img"
                />
                <p class="featured__details"></p>
              </a>
              <a href="" class="featured__item">
                <img
                  src="/src/assets/img/shoe-2.png"
                  alt="Shoe 2"
                  className="featured__img"
                />
                <p class="featured__details"></p>
              </a>
              <a href="" class="featured__item">
                <img
                  src="/src/assets/img/shoe-3.png"
                  alt="Shoe 3"
                  className="featured__img"
                />
                <p class="featured__details"></p>
              </a>
            </div>
          </div>
        </section>

        <section class="our-products">
          <div class="container">
            <h2 class="section__title">Our products</h2>
            <article class="product">
              <img
                src="/src/assets/img/shoe-4.png"
                alt="Shoe 4"
                class="product__image"
                href="#"
              />
              <h3 class="product__title"></h3>
              <p class="product__description"></p>
              <a href="" class="btn"></a>
            </article>
            <article class="product">
              <img
                src="/src/assets/img/shoe-5.png"
                alt="Shoe 5"
                class="product__image"
              />
              <h3 class="product__title"></h3>
              <p class="product__description"></p>
              <a href="" class="btn"></a>
            </article>
            <article class="product">
              <img
                src="/src/assets/img/shoe-6.png"
                alt="Shoe 6"
                class="product__image"
              />
              <h3 class="product__title"></h3>
              <p class="product__description"></p>
              <a href="" class="btn"></a>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
