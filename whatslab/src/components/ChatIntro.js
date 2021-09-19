import React from "react";
import './ChatIntro.css';
import imagem from './imagens/intro-whats.jpg';

export default () => {
    return (
    <div className="chatIntro">
        <img src={imagem} alt="imagem-whatsApp" />
        <h1> Mantenha seu celular conectado</h1>
        <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telegone a uma rede Wi-fi.</h2>

    </div>
    )
}