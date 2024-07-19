describe('parameterProperties', () => {
    
    class Person {
        constructor(public id: number) {

        }
    }

    it('shold support', () => {
        const person = new Person(10);
        console.info(person.id);
    })

});
