import React, { useEffect } from 'react';
import './App.css';
import Logo from './Kori_logo.png'; // Assuming you have the image in the src folder
import video from './Placeholder.mp4'; // Import the video file

const App: React.FC = () => {
  useEffect(() => {
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
    document.querySelectorAll('footer ul li a').forEach(button => {
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
  <img src={Logo} alt="Home" className="home-icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#partners">Partners</a></li>
      <li><a href="#apply">Apply</a></li>
    </ul>
  </nav>
</header>
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <main>
        <section id="home">
          <h1>Welcome to Our Website</h1>
          <p>This is a simple dummy text meant to be a filler or a so called placeholder text</p>
          <p>Scroll down to see the header remain at the top.</p>
        </section>
        <section id="about-us">
          <h1>Bara</h1>
          <p>hola inná klósetti</p>
        </section>
        <section id="services">
          <h1>Leika</h1>
          <p>Discover what we offer.</p>
        </section>
        <section id="contact-us">
          <h1>Mér</h1>
          <p>Get in touch with us.</p>
        </section>
        <section id="applications">
          <h1>Smá</h1>
          <p>Apply to our programs.</p>
        </section>
      </main>

      <footer>
        <nav>
          <ul>
            <li><a href="https://www.twitch.tv/koriacademy">Twitch</a></li>
            <li><a href="https://www.youtube.com/@KoriAcademy">YouTube</a></li>
            <li><a href="https://x.com/KoriAcademy">Twitter</a></li>
            <li><a href="https://www.instagram.com/koriacademygg/">Instagram</a></li>
            <li><a href="https://koriacademy.gg/">Website</a></li>
            <li><a href="https://discord.gg/DcyaMHEhnt">Discord</a></li>
            <li><a href="https://www.tiktok.com/@koriacademy">TikTok</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 Koriacademy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
