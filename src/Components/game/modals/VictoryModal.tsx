//este modal aparecera cuando el usuario game la partida
import { useTranslation } from "react-i18next";

const VictoryModal = ( ) =>{

    const { t } = useTranslation();
    return (
        <div>
            <h2>{ t( "modalVictory.title" )}</h2>
            <p>{ t( "modalVictory.message ") }</p>
            <p> { t("modalVictory.godModMessage ") }</p>
            <button></button>
        </div>
    );
}

export default VictoryModal;