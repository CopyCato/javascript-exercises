const ftoc = function(fahr) {
  let cels = (fahr - 32) * (5/9);
  let rounded = Math.round(cels * 10) / 10;
  return rounded;
};

const ctof = function(cels) {
  let fahr = cels * (9/5) + 32;
  let rounded = Math.round(fahr * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
