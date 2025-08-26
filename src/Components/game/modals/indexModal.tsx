//este componente centralizará los modales en uno
import VictoryModal from "./VictoryModal";
import TimeOutModal from "./TimeOutModal";
import ButtonNavigation from "./ButtonsNavigation";
//tipo de los diferentes estados que recibirá como propiedad
type UserStatus= "won" |"timeOut" | "lost"
type PropsModal = {
    status : UserStatus;
}

const IndexModal = ( { status } : PropsModal ) =>{

    return (
        <div> 
            {
                status === "won"?
                    <VictoryModal />
                    :
                    status === "timeOut"?
                    <TimeOutModal />
                    :
                    <ButtonNavigation />
            }
            
        </div>
    )
}

export default IndexModal;