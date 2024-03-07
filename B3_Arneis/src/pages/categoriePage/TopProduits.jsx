import { Link } from "react-router-dom";
import { getData } from '../../services/api';
import { useEffect, useState } from "react";

const TopProduits = () => {

    const [getTopProducts, setTopProducts] = useState([]);

    let data = {
        "table": "products"
    };

    useEffect(() => {
        getData("getTop", data).then(response => {
            if (response.success === true)
            {
                console.log(response);
                setTopProducts(response.data);
            }
            else
            {
                console.log(response.error);
            }
        });
    }, []);

    return(
        <>
            <section className="top-produits">
            <img src="/img/1-1-chaise-design-blanc-et-bois-clair-.jpg" alt="Chaise" className="categoriePage-image" />

                <h1 className="heading">Les <span>Highlanders</span> du moment</h1>

                <div className="box-container">
                    {getTopProducts && getTopProducts.map((product) => (
                        <div key={product.product_id} className="box">
                        <img src={`/img/${product.image_name}`} alt=""/>
                        <h3>{product.product_name}</h3>
                        <Link to="/" className="btn">Voir plus</Link>
                    </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TopProduits;