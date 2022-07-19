const cal= require('./Ex_5_4');
test('It Adds 1+2 =3',()=>{
    expect(cal.sum(1,2)).toBe(3);
    
})

test('It Adds 1+0 =1',()=>{
    expect(cal.sum(1,0)).toBe(1);
    
})

test('It Adds 5+5 =10',()=>{
    expect(cal.sum(5,5)).toBe(10);
    
})

test('It Adds 1+2 not equal to 4',()=>{
    expect(cal.sum(1,2)).not.toBe(4);
    
})

test('It Adds -1+0 =-1',()=>{
    expect(cal.sum(-1,0)).toBe(-1);
    
})

test('It Subtracts 2-1 =1',()=>{
    expect(cal.diff(2,1)).toBe(1);
    
})

test('It Subtract 1-0 =1',()=>{
    expect(cal.diff(1,0)).toBe(1);
    
})

test('It Subtracts 1,9 =-8',()=>{
    expect(cal.diff(1,9)).toBe(-8);
    
})

test('It Subtracts -1,-9 =8',()=>{
    expect(cal.diff(-1,-9)).toBe(8);
    
})

test('It Subtracts 2-1 not equal to 4',()=>{
    expect(cal.diff(2,1)).not.toBe(4);
    
})


test('It Multiplies 3*2 =6',()=>{
    expect(cal.product(3,2)).toBe(6);
    
})

test('It Multiplies 1*0 =0',()=>{
    expect(cal.product(1,0)).toBe(0);
    
})

test('It Multiplies -1*-8 =8',()=>{
    expect(cal.product(-1,-8)).toBe(8);
    
})

test('It Multiplies 1*-8 =-8',()=>{
    expect(cal.product(1,-8)).toBe(-8);
    
})

test('It Multiplies 1*2 not equal to 4',()=>{
    expect(cal.product(1,2)).not.toBe(4);
    
})





