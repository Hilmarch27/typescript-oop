describe('InstanceOf', () => {
    class Employe {}
    class Manager {}

    const budi = new Employe();
    const hilman = new Manager();

    it("should support", () => {
    expect(budi instanceof Employe).toBe(true);
    expect(hilman instanceof Manager).toBe(true);
    })
});
