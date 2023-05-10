import React, { useEffect } from 'react';
import { getProducts } from '../../api/api';

const TeltonikaRouters = () => {

    const fetchProducts = async () => {
        const test = await getProducts();
        console.log(test)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            Routers
        </div>
    )
}

export default TeltonikaRouters;