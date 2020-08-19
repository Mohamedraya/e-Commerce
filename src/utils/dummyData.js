export const dummyCategory1 = {
    title: 'category1',
    imageUrl: 'http://reactjs.org/logo-og.png'
};

export const dummyCategory2 = {
    title: 'category2',
    imageUrl: 'http://reactjs.org/logo-og.png'
};

export const dummyCategory3 = {
    title: 'category3',
    imageUrl: 'http://reactjs.org/logo-og.png'
};

export const dummyCategories = [dummyCategory1,dummyCategory2,dummyCategory3];


export const dummyProduct1 = {
    title: 'Product1',
    imageUrl: 'http://reactjs.org/logo-og.png',
    price: 100,
    discount: 0.2,
    Description: 'very nice product'
};

export const dummyProduct2 = {
    title: 'Product2',
    imageUrl: 'http://reactjs.org/logo-og.png',
    price: 100,
    discount: 0.2,
    Description: 'very nice product'
};

export const dummyProducts = [dummyProduct1,dummyProduct2];

export const dummyCartItem1 = {
    product: dummyProduct1,
};

export const dummyCartItem2 = {
    product: dummyProduct2,
};

export const dummyCartItems = [dummyCartItem1,dummyCartItem2];

export const dummyOrder1 = {
    cartItems: [dummyCartItem1],
    cost : 150,
    status: 'placed'
};

export const dummyOrder2 = {
    cartItems: [dummyCartItem2],
    cost : 150,
    status: 'placed'
};

export const dummuOrders = [dummyOrder1,dummyOrder2];