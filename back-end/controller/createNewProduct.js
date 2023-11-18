let products = [
    { id: "1", name: "laptop", price: 2300 },
    { id: "2", name: "computer", price: 3300 },
    { id: "3", name: "iphone", price: 2800 },
];
export const createNewProduct = (req, res) => {
    const newProduct = {
        id: new Date().getTime().toString(),
        title: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    console.log(newProduct)

    res.status(200).send({
        success: true,
        message: "product is added"
    })
}