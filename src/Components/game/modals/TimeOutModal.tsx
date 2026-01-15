//modal que se mostrará cuando el usuario pierda su timepo
import { useTranslation } from "react-i18next";
import timeOutMp3 from "../../../assets/sounds/time-out.mp3"
import playSound from "../../../helpers/playSound";

const TimeOutModal = ( ) =>{
    const { t } = useTranslation();
    playSound( timeOutMp3 )
    return (
        <div className="text-center space-y-3">
            <h2 className="text-lg font-semibold text-[var(--text)]">{ t("timeOutModal.title" ) }</h2>
            <p className="text-sm text-[var(--muted)]">{ t("timeOutModal.message" ) }</p>
        </div>
    );
}

export default TimeOutModal;