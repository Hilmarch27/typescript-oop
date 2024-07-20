describe('error handling', () => {
    
        class ValidateError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }


    function doubleInt (value : number) : number {
        if (value < 0) {
            throw new ValidateError('Value cannot be negative')
        }
        return value * 2
    }


    it('should handle error', () => {
        try {
            const result  = doubleInt(-1)
            console.log(result)
        } catch (e) {
            if (e instanceof ValidateError) {
                console.log(e.message)
            }
        }
    });
    

});
