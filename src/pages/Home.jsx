import React from 'react';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav id="site-nav" className="navbar navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <div className="site-branding">
              <a className="logo" href="/">
                <img src="/images/logo.png" alt="Logo" />
                Conference 2015
              </a>
            </div>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-items"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbar-items">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#about">About</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#partner">Partner</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#photos">Photos</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header section */}
      <header id="site-header" className="site-header valign-center">
        <div className="intro">
          <h2>Prochains concerts en France</h2>
          <h1>Achetez vos billets en ligne</h1>
          <p>Simple, rapide et sécurisé</p>
          <a className="btn btn-white" href="#concerts">Voir les concerts</a>
        </div>
      </header>


      {/* About section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="section-title">Notre plateforme</h3>
              <p>
                Notre mission est de vous permettre de réserver facilement vos billets de concert,
                tout en offrant aux organisateurs une solution complète de gestion d’événements.
              </p>
              <figure>
                <img alt="À propos" className="img-responsive" src="/images/about-us.jpg" />
              </figure>
            </div>
            <div className="col-sm-6">
              <h3 className="section-title multiple-title">Pourquoi nous choisir ?</h3>
              <ul className="list-arrow-right">
                <li>Interface intuitive et responsive</li>
                <li>Achat et envoi de tickets en quelques clics</li>
                <li>Alertes pour les nouveaux événements</li>
                <li>Statistiques en temps réel pour les organisateurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
