//este modal aparecera cuando el usuario game la partida
import { useTranslation } from "react-i18next";
import useGame from "../../../hook/useGame";

const VictoryModal = ( ) =>{
    const { userData } = useGame();

    const { t } = useTranslation();
    return (
        <div>
            <h2>{ t( "modalVictory.title" )}</h2>
            <p>{ t( "modalVictory.message") }</p>
            {
                userData.difficulty==="godMode" && (  <p> { t("modalVictory.godModeMessage") }</p> )
            }
            <button></button>
        </div>
    );
}

export default VictoryModal;