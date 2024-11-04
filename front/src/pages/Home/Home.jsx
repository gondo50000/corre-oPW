import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();

    const chamarPaginaCalculo = () =>{
        navigate("/formulario");
    }
    return(
        <div>
            <Header/>
            <h2>Olá, você acessou o sistema de cálculo de investimentos</h2>
            <button onClick={chamarPaginaCalculo}>Calcular Investimentos</button>
        </div>
    );
}
export default Home;