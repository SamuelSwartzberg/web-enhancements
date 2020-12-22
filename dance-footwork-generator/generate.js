  let footworkContainer = document.querySelector('#footwork-container');
var setRow=function (node, row) {
  node.style.setProperty('--grid-row',row);
}
var rotate=function (node, angle) {
  node.style.setProperty('--angle',angle + "deg");
}

var outerFootColumn = function (column) {
  this.node.style.setProperty('--grid-column',(column*2));
}
var innerFootColumn = function (column) {
  this.node.style.setProperty('--grid-column',(column*2)-1);
}

let leftFoot={
  node: document.querySelector('#left-foot'),
  setColumn: innerFootColumn,
  setColumnAlt: outerFootColumn,
  weight: function () {
    this.node.classList.toggle("weight");
  },
  movelr: function(distance){
    this.node.style.setProperty('--movement-x',distance+"px");
  },
  movefb: function(distance){
    this.node.style.setProperty('--movement-y',distance+"px");
  },
  flip: function(){
    let temp = this.setColumn;
    this.setColumn = this.setColumnAlt;
    this.setColumnAlt = temp;
  }
};
let rightFoot={
  node: document.querySelector('#right-foot'),
  setColumn: outerFootColumn,
  setColumnAlt: innerFootColumn,
  weight: function () {
    this.node.classList.toggle("weight");
  },
  movelr: function(distance){
    this.node.style.setProperty('--movement-x',distance+"px");
  },
  movefb: function(distance){
    this.node.style.setProperty('--movement-y',distance+"px");
  },
  flip: function(){
    let temp = this.setColumn;
    this.setColumn = this.setColumnAlt;
    this.setColumnAlt = temp;
  }
};

var placeFoot = function (left = true, column = 1, row = 1, rotation = 0) {
  let foot = left ? leftFoot : rightFoot;
  setRow(foot.node, row);
  foot.setColumn(column);
  rotate(foot.node,rotation);

}

var step = function (leftArr=[1, 1, 0], rightArr=[1, 1, 0]) {
  placeFoot(true, ...leftArr);
  placeFoot(false, ...rightArr);
}

var toggleColor = () => {
  footworkContainer.classList.toggle("color");
}
var toggleTransition = () => {
  footworkContainer.classList.toggle("transition");
}
var flipFeet = function(){
  rightFoot.flip(); leftFoot.flip();
}

/* Library */

/* Salsa Basic step */

var basicSalsa = function* () {
  let rows = 1;
  let columns= 1;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  for (var i = 0; i < 3; i++) {
    leftFoot.weight();
    yield;
    leftFoot.weight();
    rightFoot.weight();
    yield;
    rightFoot.weight();
  }
  return;
}
/* Salsa Basic step */

var basicSalsaMove = function* () {
  let rows = 3;
  let columns= 1;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([1,2],[1,2]);
  yield;
  step([1,1],[1,2]);
  yield;
  rightFoot.weight();
  yield;
  rightFoot.weight();
  step([1,2],[1,2]);
  yield;
  step([1,2],[1,3]);
  yield;
  leftFoot.weight();
  yield;
  leftFoot.weight();
  step([1,2],[1,2]);
  yield;
}

/* Salsa Basic to the side */

var basicSalsaSide = function* () {
  let rows = 1;
  let columns= 3;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([2,1],[2,1]);
  yield;
  step([1,1],[2,1]);
  yield;
  rightFoot.weight();
  yield;
  rightFoot.weight();
  step([2,1],[2,1]);
  yield;
  step([2,1],[3,1]);
  yield;
  leftFoot.weight();
  yield;
  leftFoot.weight();
  step([2,1],[2,1]);
  yield;
}

/* Salsa Basic Cumbia */
var cumbia = function* () {
  let rows = 2;
  let columns= 3;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([2,1],[2,1]);
  yield;
  step([2,2,270],[2,1]);
  yield;
  rightFoot.weight();
  yield;
  rightFoot.weight();
  step([2,1],[2,1]);
  yield;
  step([2,1],[2,2,90]);
  yield;
  leftFoot.weight();
  yield;
  leftFoot.weight();
  step([2,1],[2,1]);
  yield;
}

/* Salsa Basic Cumbia walking)

/* Salsa Step - Directo */

var directo = function* () {
  let rows = 5;
  let columns= 1;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([1,4],[1,5]);
  yield;
  step([1,5],[1,5]);
  yield;
  step([1,5],[1,3]);
  yield;
  step([1,1],[1,3]);
  yield;
  step([1,1],[1,1]);
  yield;
  leftFoot.weight();
  yield;
  leftFoot.weight();
  step([1,1],[1,2]);
  yield;
}

/* Salsa Step - Dile que no */

var dilequeno = function* () {
  let rows = 4;
  let columns= 4;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([2,3],[2,3]);
  yield;
  step([1,3],[2,3]);
  leftFoot.weight();
  yield;
  leftFoot.weight();
  rightFoot.weight();
  yield;
  rightFoot.weight();
  step([3,4,270],[2,3]);
  leftFoot.movefb(-100);
  leftFoot.movelr(100);
  yield;
  step([3,4,270],[3,3,270]);
  yield;
  leftFoot.movefb(0)
  leftFoot.movelr(100)
  step([3,3,225],[3,3,270])
  yield;
  step([3,3,180],[2,2,180]);
  leftFoot.movelr(0);
  return;
}

/* enchufla */

var withPartnerChange = false;

var enchufla = function* () {
  let rows = 4;
  let columns= 1;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  toggleColor();
  step([1,3],[1,4]);
  yield;
  step([1,4],[1,4]);
  yield;
  step([1,4],[1,2]);
  yield;
  step([1,1],[1,2]);
  yield;
  flipFeet();
  step([1,1,180],[1,2,180]);
  yield;
  step([1,1,180],[1,1,180]);
  yield;
  step([1,3,180],[1,1,180]);
  yield;
  if (withPartnerChange) {
    step([1,3,180],[1,4,180]);
    return;
  }
  flipFeet();
  step([1,3,0],[1,4,0]);
  step([1,3],[1,4]);
  yield;
  step([1,4],[1,4]);
  yield;
  step([1,4],[1,2]);
  yield;
  step([1,1],[1,2]);
  yield;
  flipFeet();
  step([1,1,180],[1,2,180]);
  yield;
  step([1,1,180],[1,1,180]);
  yield;
  step([1,3,180],[1,1,180]);
  yield;
  step([1,3,180],[1,4,180]);
  return;
}



/* Iterate all possibilities */

var iterateFoot = function* () {
  let rows = 2;
  let columns= 2;
  footworkContainer.style = `--rows: ${rows}; --columns: ${2*columns};`;
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= columns; j++) {
      placeFoot(true, i, j);
      for (var l = 1; l <= rows; l++) {
        for (var m = 1; m <= columns; m++) {
          placeFoot(false, l, m);
          counter++;
          yield; } } } } }

var counter = 0;
var footIterator = basicSalsaSide();
var iterateNextFootwork = function () {
  console.log(counter);
  footIterator.next();
}
let interval = window.setInterval(iterateNextFootwork, 2000);
