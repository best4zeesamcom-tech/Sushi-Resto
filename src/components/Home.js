import homeSushi from '../img/home-sushi-rolls.png';
import homeSushiTitle from '../img/home-sushi-title.png';
import leaf1 from '../img/leaf-branch-2.png';
import leaf2 from '../img/leaf-branch-4.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
const Home = () => {
  useScrollAnimation();
return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <img src={homeSushi} alt="Restaurant logo" className="home__img" />
        <div className="home__data">
          <h1 className="home__title">
            Enjoy Delicious
            <div>
              <img src={homeSushiTitle} alt="Delicious sushi" />
              Sushi Food
            </div>
          </h1>
          <p className="home__description">
            Enjoy a good dinner with the best dishes in the restaurant and improve your day.
          </p>
          <a href="/#home" className="button">
            Order Now <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
      <img src={leaf1} alt="Delicious sushi" className="home__leaf-1" />
      <img src={leaf2} alt="Delicious sushi" className="home__leaf-2" />
    </section>
  );
};
export default Home;
