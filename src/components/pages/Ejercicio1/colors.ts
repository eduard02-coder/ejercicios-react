type Color = `rgb(${number} ${number} ${number})`;

function generateColor(): Color {
  const random = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

export { generateColor };
