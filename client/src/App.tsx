import { useEffect } from 'react';
import { Route, Switch, Router } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { initScrollReveal } from './utils/scrollReveal';

// Main page component that contains all sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanup = initScrollReveal();
    
    // Re-initialize when route changes
    const handleRouteChange = () => {
      setTimeout(() => {
        initScrollReveal();
      }, 100);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      cleanup();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/problem" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/why-me" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="min-h-screen flex items-center justify-center text-white">
              <h1 className="text-4xl">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
