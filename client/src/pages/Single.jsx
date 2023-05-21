import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/03d428d02732d0904fcb0fee65f6121c-full.jpg" alt=""/>
            <div className="user">
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt=""/>
            <div className="info">
               <span>Tom</span>
               <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" />
            </div>
            </div>
            <h1>Apartament 3 camere de vanzare in Buna Ziua, Cluj Napoca</h1>
            <p>
             Apartament cu 3 camere + parcare in Sophia Residence, Buna Ziua!
                <br/><br/>
                Echipa Napoca Imobiliare are placerea de a va prezenta in exclusivitate un apartament cu 3 camere in cartierul Buna Ziua in complexul Sophia Residence, situat in zona liceului Elf intr-un imobil cu certificat verde BREEAM care ofera avantaje fiscale si reducerea consumului de energie.
                <br/><br/>
                Este un complex exclusivist securizat cu bariera, care dispune de facilitati precum Sala de fitness, teren de joaca, pista de role si biciclete, teren de basket si fotball plus o terasa uimitoare pe bloc cu vedere spre oras toate acestea puse gratuit la indemana locatarilor.
                <br/><br/>
                Apartamentul detine o suprafata utila de 75 mp + terasa de 24 mp si este compartimentat astfel:
                - 1 antreu;
                - 1 bucatarie;
                - 1 living;
                - 2 dormitoare;
                - 2 bai;
                - 1 terasa.
                <br/><br/>
                Orinetarea lui este una Estica, dar destul de facilia in privinta luminozitatii datorita pozitiei.
                <br/><br/>
                Finisajele apartamentului sunt evidentiate in felul urmator:
                - centrala termica pe bloc in condensare marca Viesmann cu reglare individuala;
                - ferestre Rehau termoizolante din PVC 3 sticle 7 camere;
                - pardoseala cu parchet laminat de 10 mm Holver;
                - usi interioare din lemn Holver;
                - usa metalica la intrare Holver;
                - gresie si faianta Marazzi si Piastrelle;
                - pereti zugraviti cu vopsea lavabila.
                <br/><br/>
                Apartamentul detine si o parcare subterana la pretul de 15.000 euro.
                <br/><br/>
                Proprietatea se vinde complet mobilata si utilata conform fotografiilor si se poate achizitiona si prin credit.
                <br/><br/>
                Alte beneficii ale imobilului sunt:
                - Clasa energetica A (100%)
                - 1.000 de metri patrati de gradina mentinuta de Magnolia;
                - Panouri solare;
                - Parcari pentru musafiri; 
                
            </p>
            </div>
            <Menu />
        </div>
    )
} 

export default Single