import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Website</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function HeroSection() {
  // Replace these URLs with your actual media URLs
  const mediaItems = [
    { type: "gif", src: "/7kmF.gif" },
    { type: "gif", src: "/617dfd2c.gif" },
    { type: "gif", src: "/2682e3d1fc3.gif" },
    { type: "gif", src: "/99f591bf.gif" },
    { type: "gif", src: "/35d20f4a.gif" },
    { type: "gif", src: "/LCPT.gif" },
    { type: "gif", src: "/c8386d86.gif" },
    { type: "gif", src: "/10fddbf9aaf.gif" },
    { type: "gif", src: "/cebe59.gif" },
    { type: "gif", src: "/SVKl.gif" },
  ];

  return (
    <div className="hero-section">
      <div className="grid-container">
        {mediaItems.map((item, index) => (
          <div className={`grid-item video${index + 1}`} key={index}>
            {item.type === "video" && (
              <video
                src={item.src}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                autoPlay
                muted
                loop
              />
            )}
            {item.type === "image" && (
              <img
                src={item.src}
                alt={`Media ${index + 1}`}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            )}
            {item.type === "gif" && (
              <img
                src={item.src}
                alt={`Media ${index + 1}`}
                width="auto"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        ))}
        <div className="grid-item text-place">Text place</div>
      </div>
    </div>
  );
}

export default App;
