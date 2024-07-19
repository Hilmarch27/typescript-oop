describe("Method Overriding", () => {
    
    class Employe {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
        sayHello1(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employe {
        
        sayHello(name: string): void {
            super.sayHello(name);
            console.info(`and, I'm Manager`);
        }
        sayHello1(name: string): void {
            super.sayHello1(name);
            console.info(`and, I'm Home`);
        }

    }

    it("should override", () => {
        const employe = new Employe("Hilman Ganss");

        employe.sayHello("April");

        const manager = new Manager("Hilman");
        manager.sayHello("April");
        manager.sayHello1("Aprilsssssss");

  });
});
