describe('Ihenrintance', () => {
    
    class Employe {
        name : string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employe { 

    }

    class Programmer extends Manager {

    }

    it('shold support', () => {
        const employe = new Employe("Hilman Ganss");
        console.info(employe.name);

        const manager = new Manager("Hilman");
        console.info(manager.name);

        const programmer = new Programmer("Hilman");
        console.info(programmer.name);
    });
    

});
