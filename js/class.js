console.warn("Class Starts")


class Furniture {

    constructor(type, color, material) {
      this.type = type;
      this.color = color;
      this.material = material;
    }
  

    displayInfo() {
      console.log(`Type: ${this.type}, Color: ${this.color}, Material: ${this.material}`);
    }
  }
  

  class Table extends Furniture {

    constructor(type, color, material, shape) {
      super(type, color, material); // Call the constructor of the base class
      this.shape = shape;
    }
  
    displayInfo() {
      super.displayInfo(); // Call the displayInfo method of the base class
      console.log(`Shape: ${this.shape}`);
    }
  }
  

  class Chair extends Furniture {
    
    constructor(type, color, material, style) {
      super(type, color, material); 
      this.style = style;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Style: ${this.style}`);
    }
  }

  class Bookshelf extends Furniture {
    constructor(type, color, material, numberOfShelves) {
      super(type, color, material); // Call the constructor of the base class
      this.numberOfShelves = numberOfShelves;
    }
  
    // Method to display information about the bookshelf
    displayInfo() {
      super.displayInfo(); // Call the displayInfo method of the base class
      console.log(`Number of Shelves: ${this.numberOfShelves}`);
    }
  }
  
  // Creating instances of the classes
  const table1 = new Table('Dining Table', 'Brown', 'Wood', 'Rectangular');
  const chair1 = new Chair('Armchair', 'Red', 'Leather', 'Modern');
  const bookshelf1 = new Bookshelf('Bookshelf', 'White', 'Particle Board', 5);
  
  // Displaying information about the furniture
  table1.displayInfo();
  chair1.displayInfo();
  bookshelf1.displayInfo();
  

console.warn("Class Ends")
