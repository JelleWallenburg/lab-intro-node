class SortedList {
  constructor(items, length) {
    this.items= items;
    this.length= length;
  }

  add(item) {
    for(let i=0; i < this.length; i++){
      if(item <= this.items[i]){
        this.items.splice(i, 0, item)
      } else {
        this.items.push(item);
      }
    }
    this.length += 1
  }
  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

let test = new SortedList([1, 3], 2)
console.log(test)
test.add(4)
console.log(test)
