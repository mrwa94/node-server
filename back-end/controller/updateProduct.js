let products = [
    { id: "1", name: "laptop", price: 2300 },
    { id: "2", name: "computer", price: 3300 },
    { id: "3", name: "iphone", price: 2800 },
];
export const updateProduct = (req, res) => {
    const id = req.params.id;
    console.log(req.body.id)
    products.filter((product) => product.id == id).map((product) => {
        product.name = req.body.name,
        product.price = req.body.price
    })
    res.status(200).send({
        success: true,
        message: 'update a product',
        payload: products,
    })
}


