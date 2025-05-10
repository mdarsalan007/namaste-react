import sum from "../sum";

test("this function should calculate the sum o ftwo numbers", ()=>{
    const result = sum(3,4);


    // Assertion
    expect(result).toBe(7);
}); 