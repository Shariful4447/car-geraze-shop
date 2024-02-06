import { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";



const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])
    return (
        <div>
            

            <div>
                <h3 className="text-3xl font-bold text-center mt-5">Browse Our Products</h3>
                <p className="text-xl text-center p-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 place-items-center">
                
                {
                    products.map(product => <ProductsCard
                    key={products._id}
                    product={product}
                    ></ProductsCard>)
                }
            </div>
            <button className="btn btn-transparent mt-5 mb-5">More Products</button>
        </div>
    );
};

export default Products;