const pets = require('./cats-and-dogs.js');

describe("challenge", () => {
    describe('cats and dogs', () => {
        let logMock;

        beforeEach(() => {
            logMock = jest.fn();

            global.console.log = logMock;
        })

        describe('cats', () => {

            it('contains property raining set to false', () => {
                expect(pets.cats.raining).toEqual(false);    
            });

            it('contains property noise set to "Meow!"', () => {
                expect(pets.cats.noise).toEqual("Meow!");    
            });

            it('contains method makeNoise()', () => {
                expect(typeof pets.cats.makeNoise).toBe( 'function' );
            });

            describe('makeNoise()', () => {
                beforeEach(() => {
                    pets.cats.makeNoise();
                })

                it('console logs somthing raining', () => {
                    expect(logMock).toHaveBeenCalled();
                });

                it('logs "Meow!"', () => {                
                    if (pets.cats.raining !== true ){
                        expect(logMock).toHaveBeenCalledWith('Cat is sleeping!');
                    } else {
                        pets.cats.makeNoise();
                        expect(logMock).toHaveBeenCalledWith('Meow!');
                    }
                });
            });
        });

        describe('dogs', () => {

            it('contains property raining set to true', () => {
                expect(pets.dogs.raining).toEqual(true);    
            });

            it('contains property noise set to "Woof!"', () => {
                expect(pets.dogs.noise).toEqual("Woof!");    
            });

            it('contains method makeNoise()', () => {
                expect(typeof pets.dogs.makeNoise).toBe( 'function' );
            });

            describe('makeNoise()', () => {
                beforeEach(() => {
                    pets.dogs.makeNoise();
                });

                it('console logs somthing', () => {                
                    expect(logMock).toHaveBeenCalled();
                });

                it('console logs somthing', () => {                
                    if (pets.dogs.raining !== true ){
                        expect(logMock).toHaveBeenCalledWith('Dog is sleeping!');
                    } else {
                        expect(logMock).toHaveBeenCalledWith('Woof!');  
                    }
                    
                });
            });
        });
    });

    describe('massHysteria()', () => {
        let logMock, cat, dog;

        cat = {raining: true}
        dog = {raining: true}

        beforeEach(() => {
            logMock = jest.fn();

            global.console.log = logMock;
        })

        it('console logs DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!', () => {
            pets.massHysteria(dog, cat)
            expect(logMock).toHaveBeenCalledWith('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
        });
    });
});