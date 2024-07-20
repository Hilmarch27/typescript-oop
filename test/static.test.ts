describe('static', () => {

    class config {
        static BOOK : string = "Hilman Journey";
        static VERSION : number = 1;
        static AUTHOR : string = "Hilman Ganss";
    }

    class MathUtil {
        static sum (...values : number[]) : number {
            let total = 0;
            for (const  value of values) {
                total += value;
            }
            return total;
        }
    }

    it('should can create static', () => {
        console.log(config.BOOK);
        console.log(config.VERSION);
        console.log(config.AUTHOR);
    });

    it('should can create static', () => {
        console.log(MathUtil.sum(1, 2, 3, 4, 5));
    });
    
});
