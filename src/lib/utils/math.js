const getRandomNumber = max => Math.floor((Math.random() * max));

const getNextRoundRobin = (total, current) => (current + 1) % 10;

export { getRandomNumber, getNextRoundRobin };
