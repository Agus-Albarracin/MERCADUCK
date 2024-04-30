import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            
            try {
                const response = await axios.get(`http://localhost:3001/api/products?page=${currentPage}`);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [currentPage]);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
            <div>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button key={page} onClick={() => goToPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

