import { useSelector } from "react-redux";


export function useAuth() {
    const {email, name, id} = useSelector(state => state.userData);

    return {
        isAuth: !!id,
        email,
        name,
        id,
    }
    
}