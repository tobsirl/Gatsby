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
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">Amazing Shoes at an amazing price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa?
          </p>
          <a href="#" className="btn"></a>
        </div>
      </header>

      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Featured products</h2>
            <div className="split">
              <a href="" className="featured__item">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Shoe 1"
                  className="featured__img"
                />
                <p className="featured__details"></p>
              </a>
              <a href="" className="featured__item">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Shoe 2"
                  className="featured__img"
                />
                <p className="featured__details"></p>
              </a>
              <a href="" className="featured__item">
                <img
                  src="/src/assets/img/shoe-3.png"
                  alt="Shoe 3"
                  className="featured__img"
                />
                <p className="featured__details"></p>
              </a>
            </div>
          </div>
        </section>

        <section className="our-products">
          <div className="container">
            <h2 className="section__title">Our products</h2>
            <article className="product">
              <img
                src="/src/assets/img/shoe-4.png"
                alt="Shoe 4"
                className="product__image"
                href="#"
              />
              <h3 className="product__title"></h3>
              <p className="product__description"></p>
              <a href="" className="btn"></a>
            </article>
            <article className="product">
              <img
                src="/src/assets/img/shoe-5.png"
                alt="Shoe 5"
                className="product__image"
              />
              <h3 className="product__title"></h3>
              <p className="product__description"></p>
              <a href="" className="btn"></a>
            </article>
            <article className="product">
              <img
                src="/src/assets/img/shoe-6.png"
                alt="Shoe 6"
                className="product__image"
              />
              <h3 className="product__title"></h3>
              <p className="product__description"></p>
              <a href="" className="btn"></a>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
