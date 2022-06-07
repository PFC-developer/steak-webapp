export const CONTRACTS = {
  mainnet: {
    multiquery: "terra1m277jus3ahphsy6wml8kdwrz2ecf7wy4ggncz6d9xmhd2a29qyss3zakjl",
    steakHub: "terra12e4v50xl33fnwkzltz9vu565snlmx65vdrk8e2644km09myewr8q538psc",
    steakToken: "terra1xumzh893lfa7ak5qvpwmnle5m5xp47t3suwwa9s0ydqa8d8s5faqn6x7al",
  },
  testnet: {
    multiquery: "terra1mgrye4409qt9yen33rrwnj06eau56kh96ajjr2fcxvcc4etawp9qhsgf8f",
    steakHub: "terra1z5clq6f5z8ys7ax6nxu5e2w29stnzyhg2ugs5tywlrkxru0d65rsa49f53",
    steakToken: "terra133na784paj579l98ep6uv9htnfzx2j6clfzpkhgld02styy8wvgssq9648",
  },
};

export const NETWORKS = {
  mainnet: {
    name: "mainnet",
    chainID: "phoenix-1",
    lcd: "https://phoenix-lcd.terra.dev",
    isClassic:false,
    walletconnectID:1
  },
  testnet: {
    name: "testnet",
    chainID: "pisco-1",
    lcd: "https://pisco-lcd.terra.dev",
    isClassic:false,
    walletconnectID:0
  },
};

export const GAS_OPTIONS = {
  gas: undefined, // leave undefined so it is estimated when signing
  gasPrices: "0.15uluna",
  gasAdjustment: 1.2,
};
