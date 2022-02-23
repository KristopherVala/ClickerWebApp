export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const incrementGold = (nr) => {
  return {
    type: "INCREMENTGOLD",
    payload: nr,
  };
};

export const decrement = (nr) => {
  return {
    type: "DECREMENT",
    payload: nr,
  };
};

export const reset = (nr) => {
  return {
    type: "RESET",
    payload: 10,
  };
};
