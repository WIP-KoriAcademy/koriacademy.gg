import React, { useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Function to smoothly scroll to sections when buttons are clicked
    document.querySelectorAll('nav ul li button').forEach(button => {
      button.addEventListener('click', function() {
        const sectionId = (this as HTMLElement).textContent!.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Function to add a sticky class to the header when you reach its scroll position
    window.onscroll = function() { stickyHeader() };

    const header = document.querySelector('header')!;
    const sticky = header.offsetTop;

    function stickyHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    // Function to add animation to buttons on click
    document.querySelectorAll('nav ul li button').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = e.target as HTMLElement;
        target.classList.add('clicked');

        setTimeout(() => {
          target.classList.remove('clicked');
        }, 600); // Duration of the animation
      });
    });
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Services</button></li>
            <li><button>Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Welcome to Our Website</h1>
          <p>This is a simple website with a fixed header and a footer.</p>
          <p>Scroll down to see the header remain at the top.</p>
        </section>
        <section id="about">
          <h1>About Us</h1>
          <p>Learn more about us.</p>
        </section>
        <section id="services">
          <h1>Our Services</h1>
          <p>Discover what we offer.</p>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <p>Get in touch with us.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Simple Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
