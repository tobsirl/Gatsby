import React from "react"

import "../assets/scss/index.scss"

export default function Home() {
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
                <img src="" alt="" className="featured__img" />
                <p class="featured__details"></p>
              </a>
              <a href="" class="featured__item">
                <img src="" alt="" className="featured__img" />
                <p class="featured__details"></p>
              </a>
              <a href="" class="featured__item">
                <img src="" alt="" className="featured__img" />
                <p class="featured__details"></p>
              </a>
            </div>
          </div>
        </section>

        <section class="our-products">
          <div class="container"></div>
        </section>
      </main>
    </div>
  )
}
