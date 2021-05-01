import React from 'react';

import Card from './components/Card';

const App = () => {
  return (
    <main>
      <section className="container">
        <div class="top-container">
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
          <img src="/images/menu-top.svg" alt="ironhack-logo"/>
        </div>

        <div className="main-title">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

          <button>
            Awesome!
          </button>
        </div>
      </section>

      <section className="box-container">
        <Card
          imagePath="/images/icon1.png"
          imageName="icon1"
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Card
          imagePath="/images/icon2.png"
          imageName="icon2"
          title="Components"
          description="Build encapsulated components that menage their state."
        />
        <Card
          imagePath="/images/icon3.png"
          imageName="icon3"
          title="Single-Way"
          description="A set of immutable values are passed to the component's."
        />
        <Card
          imagePath="/images/icon4.png"
          imageName="icon4"
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      </section>

    </main>
  );    
};

export default App;