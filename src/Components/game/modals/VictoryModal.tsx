//este modal aparecera cuando el usuario game la partida
import { useTranslation } from "react-i18next";
import useGame from "../../../hook/useGame";
import winMp3 from "../../../assets/sounds/win.mp3"
import playSound from "../../../helpers/playSound";

const VictoryModal = ( ) =>{
    const { userData } = useGame();

    const { t } = useTranslation();
    playSound( winMp3 )
    return (
        <div className="text-center space-y-3">
            <h2 className="text-lg font-semibold text-[var(--text)]">{ t( "modalVictory.title" )}</h2>
            <p className="text-sm text-[var(--muted)]">{ t( "modalVictory.message") }</p>
            {
                userData.difficulty==="godMode" && (  <p className="text-sm font-medium text-[var(--success)]"> { t("modalVictory.godModeMessage") }</p> )
            }
        </div>
    );
}

export default VictoryModal;