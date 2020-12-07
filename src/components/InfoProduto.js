import React from 'react';
import '../InfoProduto.css';

let fotoProduto = 'images/avatar/avatar152x152.png';

function Foto(){

    return (
        <>
            <div className="prod">

            </div>

        </>
    )
}

function Detalhes(){

    return(
        <>

            <div className="aside">
                <div id="vestidos">vestidos</div>
                <div id="vestido_curto">Vestido curto</div>
                
                <div id="produzido_entregue">
                Produzido e entregue por Madame Ristow<br />
                 Vendido por: Parthenon
                </div>
                <div id="preco">
                R$46,13
                </div>
                
                <div id="divide">
                ou até 5x de R$ 9,03 | Atacado mínimo: 6 peças
                </div>
                <div id="tamanho">
                Tamanho
                </div>
                <div id="tamanhos">
                    <div>P</div>
                    <div>M</div>
                    <div>G</div>
                    <div>GG</div>
                </div>
                <div id="quantidade">Quantidade</div>
                <div id="inputQuant">
                    <input type="number" value="1" />
                    <div className="aviseMe">avise-me quando chegar</div>
                </div>
                <div id="comprar" >
                    Comprar
                </div>
                <div id="adicionarAoCarrinho">
                    AdicionarAoCarrinho
                </div>
                <div id="frete">
                    Frete

                </div>
                <div id="calculeFrete">
                    Calcule o frete estimado para sua região
                </div>
                <div className="input_frete">
                    <input value="CEP" />
                    <div id="calcularFrete" >
                        Calcular
                    </div>
                </div>
                <div className="naoSeiCep">
                    Não sei meu CEP
                </div>
                

            </div>

        </>
    )
}

function Caracteristicas () {
    return (
        <>
            <div className="caracteristicas">
            - Camiseta masculina <br />
            - Manga curta <br />
            - Gola redonda <br />
            - Estampa super herói escudo capitão <br />
            - Marca: Marvel <br />
            - Tecido: meia malha <br />
            - Composição: 100% algodão <br />
            - Modelo veste tamanho: M<br />
            </div>

        </>
    )
}

function InfoProduto() {
    return (

        <>
          <div className="contaner">
              <Foto />
              <Detalhes />
              

          </div>
          <div className="contaner">
            <Caracteristicas />

          </div>

           
        </>

    )
}

export default InfoProduto;