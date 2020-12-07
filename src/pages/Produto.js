import React from 'react';
import Topo from '../components/Topo';
import Location from '../components/Location';
import InfoProduto from '../components/InfoProduto';
import { useParams } from 'react-router-dom';

function Produto() {

    let { idProduto } = useParams();

    return(

        <div>
            <Topo />
            <Location />
            <InfoProduto />
            
            
        </div>

    );
}

export default Produto;