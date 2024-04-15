import { Link, useParams } from "react-router-dom";
import { Data } from '../../services/api';
import { useEffect, useState } from "react";

const ProductSimilaire = () => {
    const [getTopProducts, setTopProducts] = useState([]);

    useEffect(() => {
        // Utiliser l'ID du produit pour récupérer les produits similaires
        const fetchData = async () => {
            try {
                const response = await Data("product", "getProductSimilaire", { table: "products", id: 1 });
                if (response.success === true) {
                    setTopProducts(response.data);
                } else {
                    console.log(response.error);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>  
            <section className="categoriePage">               
                <section className="top-produits">
                    <h1 className="heading">PRODUITS SIMILAIRES</h1>
                    <div className="box-container">
                        {getTopProducts && getTopProducts.map((product) => (
                            product.id !== 1 && (
                                <div key={product.id} className="box" >
                                    <img src={`/img/${product.product_image_name}`} alt=""/>
                                    <div className="card-title">
                                        <h4>{product.name}</h4>
                                        <h4>{product.price}€</h4>
                                    </div>
                                    <Link to={`/product/${product.id}`} className="btn">Voir plus</Link>
                                </div>
                            )
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default ProductSimilaire;
