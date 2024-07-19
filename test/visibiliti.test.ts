describe("Visibility", () => {
  class Counter {
    protected count: number = 0;

    public increment(): void {
      this.count++;
    }

    public getCounter(): number {
      return this.count;
    }
  }

  class doubleCounter extends Counter {
    public increment(): void {
      this.count += 2;
    }
  }

  it("should support private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCounter());
  });

  it("should support protected", () => {
    const counter = new doubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCounter());
  });
});
