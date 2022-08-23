import React from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Product(props){
    const {productId} = useParams();
    const navigate = useNavigate();
    return (
        <div className = "break">
            <p><h3>{productId}번 상품 <br/> This is ProductPage.</h3></p>
            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {replace : true})}>Go Root</button></li>
            </ul>
        </div>
    );
}

export default Product;