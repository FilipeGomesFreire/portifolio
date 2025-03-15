import React from 'react';
import './CompPerfil.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const CompPerfil = () => {
    return (
        <div className="profile-card-perfil">
            <div className="name-perfil">Filipe Gomes</div>
            <div></div><div></div>
            <img src="imgperfil.png" alt="Perfil" className="profile-image-perfil" />
            
            <div className="info-perfil">
                <FaMapMarkerAlt /> Recife, Brazil
            </div>
            <div className="info-perfil">
                <FaEnvelope /> filipegomesfreire@gmail.com
            </div>
            <div className="info-perfil">
                <FaLinkedin /> @filipegomesfreire
            </div>
            <div className="info-perfil">
                <FaPhoneAlt /> (81) 9.9626-5245
            </div>
        </div>
    );
}

export default CompPerfil;
