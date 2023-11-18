let products = [
    { id: "1", name: "laptop", price: 2300 },
    { id: "2", name: "computer", price: 3300 },
    { id: "3", name: "iphone", price: 2800 },
];

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (!product) {
        res.status(404).send({
            success: false,
            message: "product not found",
        });
    }
    const filterProduct = products.filter((product) => product.id == id)
    products = filterProduct
    res.status(200).send({
        success: true,
        message: 'delete a product',
        payload: products,
    })

}

