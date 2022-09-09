console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

function printOdds(n) {
  for (let num = 1; num <= n; num++) {
    if (num % 2 == 1) {
      console.log(num);
    }
  }
  console.log("End of printOdds");
}
printOdds(100);
// let input = parseInt(prompt("Give me n"));
// if (!isNaN(input)) printOdds(input);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = -1, userName = "Guest") {
  if (age < 0) {
    return null;
  }

  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge(19);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function determinePosition(x, y) {
  switch (true) {
    case x > 0 && y > 0:
      // Quadrant 1
      return "Q1";
    case x < 0 && y > 0:
      // Quadrant 2
      return "Q2";
    case x < 0 && y < 0:
      // Quadrant 3
      return "Q3";
    case x > 0 && y < 0:
      // Quadrant 4
      return "Q4";
    case x == 0 && y != 0:
      // x axis
      return "x axis";
    case x != 0 && y == 0:
      // y axis
      return "y axis";
    default:
      return "origin";
  }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
const isValidTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c); // return true of false

  if (isValid) {
    if (a == b && b == c) {
      // all sides the same
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      // two sides the same
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
};

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
const getNumberToFixed = (num, decimalPlace) => {
  return parseFloat(num.toFixed(decimalPlace));
};

const getAvg = (total, length) => {
  return getNumberToFixed(total / length);
};

const getUsageFeedback = (planLimit, days, usage) => {
  const cycleLength = 30;
  const projectedAvg = getAvg(planLimit, cycleLength);
  const currentAvg = getAvg(usage, days);
  const projectedUsage = currentAvg * cycleLength;
  const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);

  let output = `${days} days used, ${cycleLength - days} days remaining
  Suggested daily use: ${projectedAvg} GB/day
  `;

  if (currentAvg > projectedAvg) {
    output += `You are EXCEEDING your average daily use (${currentAvg} GB/day),
    continuing this high usage, you'll exceed your data plan by
    ${projectedUsage - planLimit} GB.
    To stay below your data plan, use no more than ${adjustedAvg} GB/day.`;
  } else if (currentAvg < projectedAvg) {
    output += `You are UNDER your average daily use (${currentAvg} GB/day),
    continuing this low usage, you'll lose out on ${Math.abs(
      projectedUsage - planLimit
    )} GB.
    To stay use all of your data plan, use on average ${adjustedAvg} GB/day.`;
  } else {
    output += `You are AT your average daily use (${currentAvg} GB/day).`;
  }

  console.log(output);
};

getUsageFeedback(100, 15, 56);
