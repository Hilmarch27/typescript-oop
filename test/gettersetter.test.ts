describe("getter and setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "Default Category";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should support in class", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "Hilman Ganss";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
