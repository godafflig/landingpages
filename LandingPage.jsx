import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8dcdbc8959f69e1e4c7ac474db54fe3dcf526f80?width=2892"
          alt=""
          className="hero-background"
        />
        <div className="hero-overlay">
          <header className="header">
            <h1 className="logo">ALDRET</h1>
          </header>

          <div className="hero-content">
            <h2 className="hero-title">
              Votre <em>marketplace</em> de confiance pour l'équipement sportif
            </h2>
            <p className="hero-subtitle">
              Achetez et vendez du matériel de montagne et de sport en toute sécurité
            </p>
            <div className="hero-actions">
              <button className="btn-buy">
                <a href="#buyerSection">
                  <svg className="btn-icon" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_20)">
                      <path d="M0 0.84375C0 0.376172 0.376172 0 0.84375 0H2.44336C3.2168 0 3.90234 0.45 4.22227 1.125H18.6715C19.5961 1.125 20.2711 2.00391 20.0285 2.89688L18.5871 8.25117C18.2883 9.35508 17.2863 10.125 16.1438 10.125H6.00117L6.19102 11.127C6.26836 11.5242 6.61641 11.8125 7.0207 11.8125H17.1562C17.6238 11.8125 18 12.1887 18 12.6562C18 13.1238 17.6238 13.5 17.1562 13.5H7.0207C5.8043 13.5 4.76016 12.6352 4.53516 11.4434L2.72109 1.91602C2.69648 1.78242 2.58047 1.6875 2.44336 1.6875H0.84375C0.376172 1.6875 0 1.31133 0 0.84375ZM4.5 16.3125C4.5 16.0909 4.54365 15.8715 4.62845 15.6667C4.71326 15.462 4.83756 15.276 4.99426 15.1193C5.15096 14.9626 5.33698 14.8383 5.54172 14.7535C5.74646 14.6686 5.96589 14.625 6.1875 14.625C6.40911 14.625 6.62854 14.6686 6.83328 14.7535C7.03802 14.8383 7.22404 14.9626 7.38074 15.1193C7.53744 15.276 7.66174 15.462 7.74655 15.6667C7.83135 15.8715 7.875 16.0909 7.875 16.3125C7.875 16.5341 7.83135 16.7535 7.74655 16.9583C7.66174 17.163 7.53744 17.349 7.38074 17.5057C7.22404 17.6624 7.03802 17.7867 6.83328 17.8715C6.62854 17.9564 6.40911 18 6.1875 18C5.96589 18 5.74646 17.9564 5.54172 17.8715C5.33698 17.7867 5.15096 17.6624 4.99426 17.5057C4.83756 17.349 4.71326 17.163 4.62845 16.9583C4.54365 16.7535 4.5 16.5341 4.5 16.3125ZM16.3125 14.625C16.7601 14.625 17.1893 14.8028 17.5057 15.1193C17.8222 15.4357 18 15.8649 18 16.3125C18 16.7601 17.8222 17.1893 17.5057 17.5057C17.1893 17.8222 16.7601 18 16.3125 18C15.8649 18 15.4357 17.8222 15.1193 17.5057C14.8028 17.1893 14.625 16.7601 14.625 16.3125C14.625 15.8649 14.8028 15.4357 15.1193 15.1193C15.4357 14.8028 15.8649 14.625 16.3125 14.625Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_20">
                        <path d="M0 0H20.25V18H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Acheter
                </a>
              </button>
              <button className="btn-sell">
                <a href="#heroSection">
                  <svg
                    className="btn-icon"
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_77_26)">
                      <path
                        d="M0 0.84375C0 0.376172 0.376172 0 0.84375 0H2.44336C3.2168 0 3.90234 0.45 4.22227 1.125H18.6715C19.5961 1.125 20.2711 2.00391 20.0285 2.89688L18.5871 8.25117C18.2883 9.35508 17.2863 10.125 16.1438 10.125H6.00117L6.19102 11.127C6.26836 11.5242 6.61641 11.8125 7.0207 11.8125H17.1562C17.6238 11.8125 18 12.1887 18 12.6562C18 13.1238 17.6238 13.5 17.1562 13.5H7.0207C5.8043 13.5 4.76016 12.6352 4.53516 11.4434L2.72109 1.91602C2.69648 1.78242 2.58047 1.6875 2.44336 1.6875H0.84375C0.376172 1.6875 0 1.31133 0 0.84375ZM4.5 16.3125C4.5 16.0909 4.54365 15.8715 4.62845 15.6667C4.71326 15.462 4.83756 15.276 4.99426 15.1193C5.15096 14.9626 5.33698 14.8383 5.54172 14.7535C5.74646 14.6686 5.96589 14.625 6.1875 14.625C6.40911 14.625 6.62854 14.6686 6.83328 14.7535C7.03802 14.8383 7.22404 14.9626 7.38074 15.1193C7.53744 15.276 7.66174 15.462 7.74655 15.6667C7.83135 15.8715 7.875 16.0909 7.875 16.3125C7.875 16.5341 7.83135 16.7535 7.74655 16.9583C7.66174 17.163 7.53744 17.349 7.38074 17.5057C7.22404 17.6624 7.03802 17.7867 6.83328 17.8715C6.62854 17.9564 6.40911 18 6.1875 18C5.96589 18 5.74646 17.9564 5.54172 17.8715C5.33698 17.7867 5.15096 17.6624 4.99426 17.5057C4.83756 17.349 4.71326 17.163 4.62845 16.9583C4.54365 16.7535 4.5 16.5341 4.5 16.3125ZM16.3125 14.625C16.7601 14.625 17.1893 14.8028 17.5057 15.1193C17.8222 15.4357 18 15.8649 18 16.3125C18 16.7601 17.8222 17.1893 17.5057 17.5057C17.1893 17.8222 16.7601 18 16.3125 18C15.8649 18 15.4357 17.8222 15.1193 17.5057C14.8028 17.1893 14.625 16.7601 14.625 16.3125C14.625 15.8649 14.8028 15.4357 15.1193 15.1193C15.4357 14.8028 15.8649 14.625 16.3125 14.625Z"
                        fill="#1F2937"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_26">
                        <path d="M0 0H20.25V18H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Vendre
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Explorez nos catégories</h2>
          <p className="section-subtitle">Du ski au trail, trouvez l'équipement parfait pour votre passion</p>

          <div className="categories-grid">
            <div className="category-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fbf509762493e7b6363613e4b2b94af0b023fe44?width=724"
                alt=""
                className="category-image"
              />
              <div className="category-overlay">
                <h3 className="category-title">SPORTS D'HIVER</h3>
              </div>
            </div>
            <div className="category-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7466a8251f399713a70009edfde114e7c356966d?width=724"
                alt=""
                className="category-image"
              />
              <div className="category-overlay">
                <h3 className="category-title">SPORTS D'ÉTÉ</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Pourquoi choisir ALDRET ?</h2>
          <p className="section-subtitle">Une plateforme conçue pour les passionnés de sport et de montagne</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_77_231)">
                    <path d="M15 0C15.2696 0 15.5391 0.0585938 15.7852 0.169922L26.8184 4.85156C28.1074 5.39648 29.0684 6.66797 29.0625 8.20312C29.0332 14.0156 26.6426 24.6504 16.5469 29.4844C15.5684 29.9531 14.4317 29.9531 13.4532 29.4844C3.35745 24.6504 0.966824 14.0156 0.937527 8.20312C0.931667 6.66797 1.8926 5.39648 3.18167 4.85156L14.2207 0.169922C14.461 0.0585938 14.7305 0 15 0ZM15 3.91406V26.0625C23.086 22.1484 25.2598 13.4824 25.3125 8.28516L15 3.91406Z" fill="#A7B4C2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_77_231">
                      <path d="M0 0H30V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Sécurité garantie</h3>
              <p className="feature-description">Transactions protégées et articles vérifiés</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_77_241)">
                    <path d="M20.4731 2.61283C20.8188 1.8101 20.561 0.8726 19.852 0.356975C19.1431 -0.15865 18.1763 -0.111775 17.5141 0.462444L2.51415 13.5874C1.92821 14.1031 1.71727 14.9292 1.99266 15.6558C2.26805 16.3824 2.97118 16.8746 3.75048 16.8746H10.2837L5.77782 27.3863C5.43212 28.189 5.68993 29.1265 6.39891 29.6421C7.1079 30.1578 8.07469 30.1109 8.7368 29.5367L23.7368 16.4117C24.3227 15.896 24.5337 15.0699 24.2583 14.3433C23.9829 13.6167 23.2856 13.1304 22.5005 13.1304H15.9673L20.4731 2.61283Z" fill="#A7B4C2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_77_241">
                      <path d="M0 0H26.25V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Efficacité</h3>
              <p className="feature-description">Achetez ou vendez en quelques clics, livraison express</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_77_253)">
                    <path d="M12.3637 0.428175C12.0122 0.0590346 11.4848 -0.0815904 10.9926 0.0473158C10.5004 0.176222 10.1196 0.5688 9.99068 1.06099L9.06489 4.7231L5.43208 3.69771C4.93989 3.55708 4.41255 3.69771 4.05513 4.05513C3.69771 4.41255 3.55708 4.93989 3.69771 5.43208L4.7231 9.06489L1.06099 9.99654C0.5688 10.1196 0.182081 10.5063 0.0473158 10.9985C-0.0874498 11.4907 0.0590346 12.0122 0.428175 12.3637L3.13521 15.0004L0.428175 17.6372C0.0590346 17.9887 -0.0815904 18.5161 0.0473158 19.0083C0.176222 19.5004 0.5688 19.8813 1.06099 20.0102L4.7231 20.936L3.69771 24.5688C3.55708 25.061 3.69771 25.5883 4.05513 25.9458C4.41255 26.3032 4.93989 26.4438 5.43208 26.3032L9.06489 25.2778L9.99068 28.9399C10.1137 29.4321 10.5004 29.8188 10.9926 29.9536C11.4848 30.0883 12.0063 29.9418 12.3637 29.5786L15.0004 26.8715L17.6372 29.5786C17.9946 29.9418 18.5161 30.0883 19.0083 29.9536C19.5004 29.8188 19.8813 29.4321 20.0102 28.9399L20.936 25.2778L24.5688 26.3032C25.061 26.4438 25.5883 26.3032 25.9458 25.9458C26.3032 25.5883 26.4438 25.061 26.3032 24.5688L25.2778 20.936L28.9399 20.0102C29.4321 19.8872 29.8188 19.5004 29.9536 19.0083C30.0883 18.5161 29.9418 17.9946 29.5786 17.6372L26.8715 15.0004L29.5786 12.3637C29.9418 12.0063 30.0883 11.4848 29.9536 10.9926C29.8188 10.5004 29.4321 10.1196 28.9399 9.99068L25.2778 9.06489L26.3032 5.43208C26.4438 4.93989 26.3032 4.41255 25.9458 4.05513C25.5883 3.69771 25.061 3.55708 24.5688 3.69771L20.936 4.7231L20.0043 1.06099C19.8813 0.5688 19.4946 0.182081 19.0024 0.0473158C18.5102 -0.0874498 17.9887 0.0590346 17.6372 0.428175L15.0004 3.13521L12.3637 0.428175Z" fill="#A7B4C2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_77_253">
                      <path d="M0 0H30V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="feature-title">Qualité premium</h3>
              <p className="feature-description">Équipements de grandes marques, contrôlés et authentifiés</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="feature-icon-euro">€</span>
              </div>
              <h3 className="feature-title">Acheter au meilleur prix</h3>
              <p className="feature-description">Équipé avec du matériel de marque et de qualité au meilleur prix</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id='buyerSection' className="security-section">
        <div className="container">
          <h2 className="section-title">La sécurité avant tout pour vos achats</h2>
          <p className="section-description">
            Tous vos achats sont grâce à notre système de <strong>protégés</strong> vérification rigoureuse.
            Nos vendeurs sont certifiés et nos paiements sécurisés
          </p>
          <div className="security-content">
            <div className="security-features">
              <div className="security-card">
                <div className="security-icon">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_187)">
                      <path d="M2.5 1.25C1.12109 1.25 0 2.37109 0 3.75V5H22.5V3.75C22.5 2.37109 21.3789 1.25 20 1.25H2.5ZM22.5 8.75H0V16.25C0 17.6289 1.12109 18.75 2.5 18.75H20C21.3789 18.75 22.5 17.6289 22.5 16.25V8.75ZM4.375 13.75H6.875C7.21875 13.75 7.5 14.0312 7.5 14.375C7.5 14.7188 7.21875 15 6.875 15H4.375C4.03125 15 3.75 14.7188 3.75 14.375C3.75 14.0312 4.03125 13.75 4.375 13.75ZM8.75 14.375C8.75 14.0312 9.03125 13.75 9.375 13.75H14.375C14.7188 13.75 15 14.0312 15 14.375C15 14.7188 14.7188 15 14.375 15H9.375C9.03125 15 8.75 14.7188 8.75 14.375Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_187">
                        <path d="M0 0H22.5V20H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h3 className="security-card-title">Paiments sécurisés</h3>
                <p className="security-card-description">Transactions protégés et garantie de remboursement intégrale</p>
              </div>

              <div className="security-card">

                <div className="security-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_174)">
                      <path d="M6.11328 17.4883L5.62109 18.6406C4.89062 18.2695 4.21875 17.8125 3.60938 17.2773L4.49609 16.3906C4.98437 16.8164 5.52734 17.1875 6.11328 17.4883ZM1.58594 10.625H0.332031C0.386719 11.4531 0.542969 12.2539 0.789063 13.0117L1.95312 12.5469C1.76172 11.9336 1.63281 11.2891 1.58594 10.625ZM1.58594 9.375C1.64062 8.64063 1.78906 7.92969 2.01953 7.26172L0.867188 6.76953C0.574219 7.58984 0.390625 8.46484 0.332031 9.375H1.58594ZM2.51172 6.11328C2.81641 5.53125 3.18359 4.98828 3.60938 4.49219L2.72266 3.60547C2.1875 4.21484 1.72656 4.88672 1.35937 5.61719L2.51172 6.11328ZM15.5078 16.3906C14.9648 16.8594 14.3594 17.2617 13.707 17.5781L14.1719 18.7422C14.9805 18.3555 15.7266 17.8594 16.3945 17.2734L15.5078 16.3906ZM4.49219 3.60938C5.03516 3.14063 5.64063 2.73828 6.29297 2.42188L5.82812 1.25781C5.01953 1.64453 4.27344 2.14063 3.60938 2.72656L4.49219 3.60938ZM17.4883 13.8867C17.1836 14.4687 16.8164 15.0117 16.3906 15.5078L17.2773 16.3945C17.8125 15.7852 18.2734 15.1094 18.6406 14.3828L17.4883 13.8867ZM18.4141 10.625C18.3594 11.3594 18.2109 12.0703 17.9805 12.7383L19.1328 13.2305C19.4258 12.4063 19.6094 11.5312 19.6641 10.6211H18.4141V10.625ZM12.5469 18.0469C11.9336 18.2422 11.2891 18.3672 10.625 18.4141V19.668C11.4531 19.6133 12.2539 19.457 13.0117 19.2109L12.5469 18.0469ZM9.375 18.4141C8.64063 18.3594 7.92969 18.2109 7.26172 17.9805L6.76953 19.1328C7.59375 19.4258 8.46875 19.6094 9.37891 19.6641V18.4141H9.375ZM18.0469 7.45313C18.2422 8.06641 18.3672 8.71094 18.4141 9.375H19.668C19.6133 8.54687 19.457 7.74609 19.2109 6.98828L18.0469 7.45313ZM3.60938 15.5078C3.14063 14.9648 2.73828 14.3594 2.42188 13.707L1.25781 14.1719C1.64453 14.9805 2.14063 15.7266 2.72656 16.3945L3.60938 15.5078ZM10.625 1.58594C11.3594 1.64062 12.0664 1.78906 12.7383 2.01953L13.2305 0.867188C12.4102 0.574219 11.5352 0.390625 10.625 0.332031V1.58594ZM7.45313 1.95312C8.06641 1.75781 8.71094 1.63281 9.375 1.58594V0.332031C8.54687 0.386719 7.74609 0.542969 6.98828 0.789063L7.45313 1.95312ZM17.2773 3.60547L16.3906 4.49219C16.8594 5.03516 17.2617 5.64063 17.582 6.29297L18.7461 5.82812C18.3594 5.01953 17.8633 4.27344 17.2773 3.60547ZM15.5078 3.60938L16.3945 2.72266C15.7852 2.1875 15.1133 1.72656 14.3828 1.35937L13.8906 2.51172C14.4688 2.81641 15.0156 3.18359 15.5078 3.60938Z" fill="white" />
                      <path d="M10 15.3125C10.6041 15.3125 11.0938 14.8228 11.0938 14.2188C11.0938 13.6147 10.6041 13.125 10 13.125C9.39594 13.125 8.90625 13.6147 8.90625 14.2188C8.90625 14.8228 9.39594 15.3125 10 15.3125Z" fill="white" />
                      <path d="M10.301 12.1875H9.67599C9.41818 12.1875 9.20724 11.9766 9.20724 11.7188C9.20724 8.94531 12.2307 9.22266 12.2307 7.50781C12.2307 6.72656 11.5354 5.9375 9.98849 5.9375C8.85177 5.9375 8.25802 6.3125 7.67599 7.05859C7.52365 7.25391 7.2424 7.29297 7.04318 7.15234L6.53146 6.79297C6.31271 6.64062 6.26193 6.33203 6.4299 6.12109C7.25802 5.05859 8.2424 4.375 9.9924 4.375C12.0354 4.375 13.7971 5.53906 13.7971 7.50781C13.7971 10.1484 10.7736 9.98828 10.7736 11.7188C10.7697 11.9766 10.5588 12.1875 10.301 12.1875Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_174">
                        <path d="M0 0H20V20H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="security-card-title">Vérification des vendeurs</h3>
                <p className="security-card-description">Chaque vendeur est rigoureusement vérifié et certifié avant de rejoindre notre marketplace</p>
              </div>
            </div>

            <div className="security-image-wrapper">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f1b2ec934b60b376fc7bc3996dbd5241aa4c6a62?width=958"
                alt=""
                className="security-image"
              />
              <div className="security-badge">
                <div className="security-badge-icon">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_201)">
                      <path d="M11.9931 2.88232C12.3349 3.22412 12.3349 3.7792 11.9931 4.121L4.99307 11.121C4.65127 11.4628 4.09619 11.4628 3.75439 11.121L0.254395 7.621C-0.0874023 7.2792 -0.0874023 6.72412 0.254395 6.38232C0.596191 6.04053 1.15127 6.04053 1.49307 6.38232L4.3751 9.26162L10.7571 2.88232C11.0989 2.54053 11.654 2.54053 11.9958 2.88232H11.9931Z" fill="#16A34A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_201">
                        <path d="M0 0H12.25V14H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="security-badge-content">
                  <div className="security-badge-title">100% Sécurisé</div>
                  <div className="security-badge-subtitle">Garantie totale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Steps Section */}
      <section id="heroSection" className="selling-steps-section">
        <div className="container">
          <h2 className="section-title">Étapes de vente</h2>
          <p className="section-subtitle">Les étapes par lesquelles passent les vendeurs pour mener à bien leur vente.</p>

          <div className="steps-timeline">
            <div className="step-number-wrapper">
              <div className="step-number">1</div>
            </div>
            <div className="step-number-wrapper">
              <div className="step-number">2</div>
            </div>
            <div className="step-number-wrapper">
              <div className="step-number">3</div>
            </div>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <h3 className="step-title">Mettre l'article en ligne</h3>
              <p className="step-description">
                Ajouter ton article en prenant quelques photos (avant, arrière, côtés, zoom sur l'état)
                et indiquer les détails (taille, matière, prix, longueur, marque...).
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">Gérer la vente</h3>
              <p className="step-description">
                Quand une personne s'intéresseà ton article, tu peux discuter avec elle, puis accepter
                l'achat et télécharger l'étiquette d'envoi quand tout est confirmé.
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">Envoyer le colis et finaliser</h3>
              <p className="step-description">
                Tu déposes ton colis au point où tu le donnes en mains propres, et une fois que l'acheteur
                confirme la réception, le montant de la vente est ajouté à ton portefeuille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section className="questionnaire-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0db2e5f0d4982d476aaa7717b34855e9b16c3baf?width=4382"
          alt=""
          className="questionnaire-background"
        />
        <div className="questionnaire-overlay">
          <div className="questionnaire-content">
            <h1 className="questionnaire-title">Formulaire</h1>
            <p className="questionnaire-subtitle">
              Aidez-nous à remplir ce formulaire afin que nous puissions l'améliorer au maximum.
            </p>
            <a href="https://forms.gle/oRM58wESHzgrdtoa9" className="questionnaire-link">Questionnaire</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-logo">ALDRET</h3>
              <p className="footer-description">
                La marketplace de référence pour les passionnés de sport et de montagne.
              </p>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Équipements</a></li>
                <li><a href="#">Comment ça marche</a></li>
                <li><a href="#">À propos</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Légal</h4>
              <ul className="footer-links">
                <li><a href="#">Conditions générales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Suivez-nous</h4>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_64)">
                      <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="#D1D5DB" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_64">
                        <path d="M0 0H10V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_69)">
                      <path d="M7.00352 4.40586C5.01602 4.40586 3.41289 6.00898 3.41289 7.99648C3.41289 9.98398 5.01602 11.5871 7.00352 11.5871C8.99102 11.5871 10.5941 9.98398 10.5941 7.99648C10.5941 6.00898 8.99102 4.40586 7.00352 4.40586ZM7.00352 10.3309C5.71914 10.3309 4.66914 9.28398 4.66914 7.99648C4.66914 6.70898 5.71602 5.66211 7.00352 5.66211C8.29102 5.66211 9.33789 6.70898 9.33789 7.99648C9.33789 9.28398 8.28789 10.3309 7.00352 10.3309ZM11.5785 4.25898C11.5785 4.72461 11.2035 5.09648 10.741 5.09648C10.2754 5.09648 9.90352 4.72148 9.90352 4.25898C9.90352 3.79648 10.2785 3.42148 10.741 3.42148C11.2035 3.42148 11.5785 3.79648 11.5785 4.25898ZM13.9566 5.10898C13.9035 3.98711 13.6473 2.99336 12.8254 2.17461C12.0066 1.35586 11.0129 1.09961 9.89102 1.04336C8.73477 0.977734 5.26914 0.977734 4.11289 1.04336C2.99414 1.09648 2.00039 1.35273 1.17852 2.17148C0.356641 2.99023 0.103516 3.98398 0.0472656 5.10586C-0.0183594 6.26211 -0.0183594 9.72773 0.0472656 10.884C0.100391 12.0059 0.356641 12.9996 1.17852 13.8184C2.00039 14.6371 2.99102 14.8934 4.11289 14.9496C5.26914 15.0152 8.73477 15.0152 9.89102 14.9496C11.0129 14.8965 12.0066 14.6402 12.8254 13.8184C13.6441 12.9996 13.9004 12.0059 13.9566 10.884C14.0223 9.72773 14.0223 6.26523 13.9566 5.10898ZM12.4629 12.1246C12.2191 12.7371 11.7473 13.209 11.1316 13.4559C10.2098 13.8215 8.02227 13.7371 7.00352 13.7371C5.98477 13.7371 3.79414 13.8184 2.87539 13.4559C2.26289 13.2121 1.79102 12.7402 1.54414 12.1246C1.17852 11.2027 1.26289 9.01523 1.26289 7.99648C1.26289 6.97773 1.18164 4.78711 1.54414 3.86836C1.78789 3.25586 2.25977 2.78398 2.87539 2.53711C3.79727 2.17148 5.98477 2.25586 7.00352 2.25586C8.02227 2.25586 10.2129 2.17461 11.1316 2.53711C11.7441 2.78086 12.216 3.25273 12.4629 3.86836C12.8285 4.79023 12.7441 6.97773 12.7441 7.99648C12.7441 9.01523 12.8285 11.2059 12.4629 12.1246Z" fill="#D1D5DB" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_69">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832438 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87813 5.53337C7.82738 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5533 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149Z" fill="#D1D5DB" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="#D1D5DB" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 ALDRET. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
