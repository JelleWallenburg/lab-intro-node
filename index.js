class SortedList {
  constructor(items) {
    this.items= items;
    this.length= items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length +=1;
    }

  get(pos) {
    if(pos <= this.length){
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length !== 0){
      return Math.max(...this.items);
    } else{
      throw new Error('EmptySortedList');
    }
  }
  
  min() {
    if (this.length !==0){
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sum=0;
    for(let i=0; i < this.length; i++){
      sum += this.items[i];
    } 
    return sum;
  }

  avg() {
    let sum=0;
    for(let i=0; i < this.length; i++){
      sum += this.items[i];
    } 
    return sum/this.length;
  }
}

module.exports = SortedList;