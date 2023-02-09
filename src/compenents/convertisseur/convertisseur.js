import React, {useState} from 'react';
import './public/css/convertisseur.css'

// VARIABLE QUI REPRESENTE LES TAUX DE CHANGE ENTRE LES DEVISES
let tauxChange = {
    EUR: 1,
    USD: 1.08,
    GBP: 0.89,
    DZD: 146.82,
    SEK: 11.14
};

export const Convertisseur = () => {
    // LE MONTANT À CONVERTIR 
    let [montant, setMontant] = useState(0);
    // LA DEVISE INITIAL CELLE PAR DEFAUT EST L'EURO
    let [initial, setInitial] = useState("EUR");
    // LA DEVISE QU'ON VA CONVERTIR CELLE PAR DEFAUT EST LE DOLLARS
    let [convertir, setConvertir] = useState("USD");

    //LA FONCTION RESET LE MONTANT À CONVERTIR
    let Montant = (element) => {
        setMontant(element.target.value);
    };
    //LA FONCTION RESET LA DEVISE INITIAL
    let Initial = (element) => {
        setInitial(element.target.value);
    };

    //LA FONCTION RESET LE DEVISE CONVERTIE
    let Convertir = (element) => {
        setConvertir(element.target.value);
    };

    // CALCULE LE MONTANT AVEC LES TAUX DE CHANGE
    let calcul = (montant * tauxChange[convertir]) / tauxChange[initial];

    return (
    <div>
        <input
            type="number"
            value={montant}
            onChange={Montant}
        />
        <select value={initial} onChange={Initial}>
            <option value="EUR">Euro </option>
            <option value="USD">Dollar américain</option>
            <option value="GBP">GBP</option>
            <option value="DZD">Dinar algérien</option>
            <option value="SEK">Couronne suédoise</option>


        </select>
        <select value={convertir} onChange={Convertir}>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar américain</option>
            <option value="GBP">Livre sterling</option>
            <option value="DZD">Dinar algérien</option>
            <option value="SEK">Couronne suédoise</option>



        </select>
        {/* TOFIXED POUR GERER LA NOTATION APRES LE POINT  */}
        <p>{calcul.toFixed(3)}</p>
        </div>
    );
}

