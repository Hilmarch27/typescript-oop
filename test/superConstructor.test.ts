describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    departement: string;
    constructor(name: string, departement: string) {
      super(name);
      this.departement = departement;
    }
  }

  it("should can create super", () => {
    const employee = new Employee("Hilman", "IT");
    console.info(employee.name);
    console.info(employee.departement);
  });
});
