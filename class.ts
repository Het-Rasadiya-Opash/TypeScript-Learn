class Person {
  user: string | undefined;
}

const person = new Person();
person.user = "het";
console.log(person);

// class Person {
//   //   private name: string;

//   //   public constructor(name: string) {
//   //     this.name = name;
//   //   }

//   public constructor(private name: string) {}

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("het");
// console.log(person.getName());

// class Person {
//   private readonly name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Het");
// console.log(person.getName());

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// const myRect = new Rectangle(10,20);

// console.log(myRect.getArea());


interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}

const mySq = new Square(20);

console.log(mySq.getArea());
