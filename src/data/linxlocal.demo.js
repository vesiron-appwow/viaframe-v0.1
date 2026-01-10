export default {
  hero: {
    src: "/images/cafe-hero.jpg",
    alt: "The Corner Café interior",
    height: 220
  },

  header: {
    title: "The Corner Café",
    subtitle: "Independent coffee & light bites · Open daily",
    actionLabel: "Order ahead",
    actionMessage: "Order ahead coming soon"
  },

  cards: [
    {
      title: "Today’s Special",
      content: `
        <p><strong>Homemade vegetable soup & sourdough</strong></p>
        <p>Served until sold out · £6.50</p>
      `
    }
  ],

  sections: [
    {
      title: "Visit Us",
      content: `
        <p>
          12 Market Street<br />
          Brighton, BN1
        </p>
        <p>
          <strong>Opening hours</strong><br />
          Mon–Fri: 8am – 4pm<br />
          Sat–Sun: 9am – 3pm
        </p>
      `
    },
    {
      title: "Menu Highlights",
      content: `
        <ul>
          <li>Freshly brewed coffee</li>
          <li>Specialty teas</li>
          <li>Breakfast pastries</li>
          <li>Sandwiches & light lunches</li>
        </ul>
      `
    }
  ]
};
