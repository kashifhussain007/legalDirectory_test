import LandingPage from "/src/components/landing-page/MainContent";
import Header from "/src/components/landing-page/header";
import Footer from "/src/components/landing-page/footer";

const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default HomePage;
