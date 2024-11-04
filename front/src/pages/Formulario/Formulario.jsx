import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Formulario.css";


const Formulario = () => {
    const [valorInicial, setValorInicial] = useState(0);
    const [prazo, setPrazo] = useState(0);
    const [juro, setJuro] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [calculos, setCalculos] = useState([]);

    const calcular = () => {
        let res = valorInicial * Math.pow((1 + juro / 100), prazo);
        setResultado(res);
        let novoItem = { id: calculos.length, valorInicial: valorInicial, prazo: prazo, juro: juro, final: res };
        setCalculos([...calculos, novoItem]);
    }

    return (
        <div>
            <Header label=" - Formulário" />
            <div className="formulario">
                <label>Valor Inicial</label>
                <input value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
                <label>Prazo em Meses</label>
                <input value={prazo} onChange={(e) => setPrazo(e.target.value)} />
                <label>Juro Mensal</label>
                <input value={juro} onChange={(e) => setJuro(e.target.value)} />
                {resultado > 0 && <span>O valor final será de {resultado}</span>}
                <button className="botao" onClick={calcular}>Calcular</button>
            </div>
            {calculos.length > 0 && <div> <table border='1'>
                <thead>
                    <tr>
                        <th>
                            Valor
                        </th>
                        <th>
                            Prazo
                        </th>
                        <th>
                            Juro
                        </th>
                        <th>
                            Final
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {calculos.map(calc => <tr key={calc.id}>
                        <td>
                            {calc.valorInicial}
                        </td>
                        <td>
                            {calc.prazo}
                        </td>
                        <td>
                            {calc.juro}
                        </td>
                        <td>
                            {calc.final}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
                <button className="botao" onClick={() => setCalculos([])}>Limpar</button>
            </div>}
        </div>
    )
}
export default Formulario;