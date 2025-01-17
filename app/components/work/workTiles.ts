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
      src: 'public/static/images/project combined.PNG',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'House Price Prediction',
    image: {
      src: 'public/static/images/house.jpg',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I created`,
    title: 'Credit Card Fraud Detection',
    image: {
      src: 'public/static/images/creditcardfraud.jpg',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Birdie Bounce',
    image: {
      src: 'public/static/images/flappy.jpg',
      width: 600,
      height: 717,
    },
  },
];
