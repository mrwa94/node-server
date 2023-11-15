let products = [
    { id: "1", name: "laptop", price: 2300 },
    { id: "2", name: "computer", price: 3300 },
    { id: "3", name: "iphone", price: 2800 },
];

export const getAllProducts = (req, res) => {
    res.status(200).send({
        success: true,
        message: 'return all products',
        payload: products,
    })
};


