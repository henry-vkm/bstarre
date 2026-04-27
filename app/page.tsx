import "./globals.css";

export default function Home() {
  const dishes = [
    {
      title: "Spicy Duck Skin Fried Rice",
      tag: "Chef Favorite",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSFKg4jTIjUc6x0fXJGemvye1WHc8zLoWvSjUWboZBiGu5rEwwxUXePKkkDCNnUu_Zf5RZZjhKLq1REQetnUSKfBf3qDWCoEwXU-konhUbzLOGI-Av8tzCW_tk0Ain62m9sYnowg=s680-w680-h510-rw",
      text: "Our legendary house special featuring perfectly rendered duck skin and aromatic spices.",
    },
    {
      title: "Burmese Lamb Curry",
      tag: "Premium Heritage",
      price: "$120",
      image: null,
      text: "Slow-braised tender lamb in a rich, complex spice blend. Perfect for sharing.",
    },
    {
      title: "Firecracker Cauliflower",
      tag: "",
      price: "$9.00",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800",
      text: "Flash-fried with a sweet-savory glaze and sesame crunch.",
    },
    {
      title: "Tea Leaf Salad",
      tag: "Essential Pairing",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEhWSeAXxPF52riUY8MZQU7YHRubeaoxJWindBk-ko7XzpmYoe0klWswG6vqCCrKUY_uop7D9J7P6WhTjru3lo0o9U_vPGJ1OZv15rJoRPA0QK93rZgR_msKs0af3KUQdUuGfPz=s680-w680-h510-rw",
      text: "Tea leaf, fermented tea, tomato, nuts, and savory texture.",
    },
  ];

  return (
    <main>
      <nav className="nav">
        <div className="logo">B-Star</div>

        <div className="navLinks">
          <a>Menu</a>
          <a>Our Story</a>
          <a>Catering</a>
          <a>Events</a>
          <a>Contact</a>
        </div>

        <button className="navBtn">Book a Table</button>
      </nav>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">A Clement Street Icon</p>
          <h1>Your Neighborhood Hearth for Southeast Asian Flavors</h1>
          <p>
            Experience the vibrant intersection of traditional Burmese roots and
            contemporary San Francisco soul.
          </p>

          <div className="heroBtns">
            <button>Reserve a Table</button>
            <button className="outline">View Menu</button>
          </div>
        </div>
      </section>

      <section className="intro">
        <div>
          <div className="smallLine" />
          <h2>Authentic Flavors, Clement Street Soul.</h2>
          <p>
            For over a decade, B-Star has served as the casual, vibrant heart of
            the Inner Richmond, blending Southeast Asian heritage with
            California's seasonal bounty.
          </p>
        </div>

        <div className="stats">
          <div>
            <strong>80</strong>
            <span>Guest Capacity</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>House Specialties</span>
          </div>
        </div>
      </section>

      <section className="menuSection">
        <div className="sectionTop">
          <div>
            <p className="eyebrow red">Curated Menu</p>
            <h2>Signature Dishes</h2>
          </div>
          <a>View Full Menu</a>
        </div>

        <div className="dishGrid">
          {dishes.map((dish, index) => (
            <article
              className={`dishCard ${!dish.image ? "brownCard" : ""}`}
              key={index}
            >
              {dish.image && <img src={dish.image} alt={dish.title} />}

              <div className="dishText">
                {dish.tag && <p className="dishTag">{dish.tag}</p>}
                <div className="dishTitleRow">
                  <h3>{dish.title}</h3>
                  {dish.price && <span>{dish.price}</span>}
                </div>
                <p>{dish.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBKEZobya81mX2H4vsDFGQna2Yyb9aKwpPzPh3Xk65QfE5SGX1UzWhYlEUzxYB-M4VblCscDPiojWTNL8AgIG5UBaRSIy2d-pF4ZIoGysz9gDTTXiI7HhthdUA9D237dYb_Jo82w=s680-w680-h510-rw"
          alt="restaurant exterior"
        />

        <div className="visitInfo">
          <h2>Visit Us</h2>

          <div className="infoItem">
            <span>📍</span>
            <p>
              127 Clement St <br />
              San Francisco, CA 94118
            </p>
          </div>

          <div className="infoItem">
            <span>🕒</span>
            <p>
              Sun–Thu: 11:30am - 9:00pm <br />
              Fri–Sat: 11:30am - 9:30pm
            </p>
          </div>

          <div className="infoItem">
            <span>🍽️</span>
            <p>
              <b>Private Dining</b> <br />
              Hosting events for up to 80 guests.
            </p>
          </div>

          <button>Book a Table</button>
        </div>
      </section>

      <footer>
        <div className="footerGrid">
          <div>
            <h3>B-Star</h3>
            <p>
              Modern Southeast Asian dining in the heart of San Francisco's
              Inner Richmond district.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <a>Menu</a>
            <a>Reservations</a>
            <a>Shop</a>
            <a>About</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a>Privacy</a>
            <a>Terms</a>
            <a>Accessibility</a>
          </div>
        </div>

        <p className="copyright">
          © 2024 B-Star San Francisco. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
