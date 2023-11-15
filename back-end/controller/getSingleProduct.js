let products = [
    { id: "1", name: "laptop", price: 2300 },
    { id: "2", name: "computer", price: 3300 },
    { id: "3", name: "iphone", price: 2800 },
];

export const getSingleProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (!product) {
        res.status(404).send({
            success: false,
            message: "product not found",
        });
    }
    res.status(200).send({
        success: true,
        message: 'return single product',
        payload: product,
    })
};