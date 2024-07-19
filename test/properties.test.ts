describe('properties', () => {
      class Customer {
        readonly id: number;
        name: string = "Hilman Ganss";
        age?: number;
        constructor(id: number, name: string) {
          this.id = id;
          this.name = name;
        }

        sayHello (name: string) : void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
      }

      it('should can have properties', () => {
        
        const customer = new Customer(1, "Hilman");
        customer.age = 20;

        console.info("this customer", customer);
        
        customer.sayHello("Hilman");

      });
      
      
});
