import HomeScreen from "./HomeScreen";
import UserScreen from "./UserScreen";

export{
    HomeScreen,
    UserScreen
}

export const validarVista = (visto) =>{
    if(visto == 0){
        return 'none'
    }
    else{
        return ''
    }
}