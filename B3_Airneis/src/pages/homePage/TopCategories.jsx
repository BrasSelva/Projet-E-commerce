import { Link } from "react-router-dom";
import { Data } from '../../services/api';
import { useEffect, useState } from "react";
import { ToastQueue } from "@react-spectrum/toast";

const TopCategories = () => {

    const [getTopCategories, setTopCategories] = useState([]);

    let data = {
        "table": "categories"
    };

    useEffect(() => {
        Data("panelAdmin", "getTop", data).then(response => {
            if (response.success === true)
            {
                setTopCategories(response.data);
            }
            else
            {
                ToastQueue.negative(response.error, {timeout: 5000});
            }
        });
    }, []);

    return(
        <>
            <section className="top-categories">

                <h1 className="heading">Venant des hautes terres d'écosse nos meubles sont <span>immortels</span> </h1>

                <div className="box-container">
                    {getTopCategories && getTopCategories.map((category) => (
                        <div key={category.category_id} className="box">
                            <img src={`/img/${category.image_name}`} alt=""/>
                            <h3>{category.category_name}</h3>
                            <Link to={`/categories/${category.category_id}`} className="btn">Voir plus</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TopCategories;