export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/project combined.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'House Price Prediction',
    image: {
      src: '/static/images/house.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I created`,
    title: 'Credit Card Fraud Detection',
    image: {
      src: '/static/images/creditcardfraud.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Birdie Bounce',
    image: {
      src: '/static/images/flappy.webp',
      width: 600,
      height: 717,
    },
  },
];
