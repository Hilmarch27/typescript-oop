describe('Polymorphism', () => {
    
    class Employe  {
        constructor(public name: string) {

        }
    }

    class Manager extends Employe {}

    class Programmer extends Manager {}

    function sayHello(employe: Employe) : void {
       if (employe instanceof Programmer) {
            const programmer = employe as Programmer;
            console.info(`Hello Programmer ${programmer.name}`);   
       } else if (employe instanceof Manager) {
            const manager = employe as Manager;
            console.info(`Hello Manager ${manager.name}`);
       }else {
           console.log(`hello employe ${employe.name}`);
       }
    }


    it('should support', () => {
        let employe = new Employe("Hilman");
        console.info(employe);
        
        employe = new Manager("Hilman");
        console.info(employe);
        
        employe = new Programmer("Hilman");
        console.info(employe);
    });

    it("should support polymorphism", () => {
        sayHello(new Employe("Hilman"));
        sayHello(new Manager("April"));
        sayHello(new Programmer("Dini"));
    })
    
});
