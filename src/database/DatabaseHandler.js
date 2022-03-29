import { get, getDatabase,child,ref, set } from "firebase/database";

export class DatabaseHandler{

    static database = getDatabase();

    static registerUserData(userId,userName,email,birthDate,majority){
    set(ref(this.database,'users/'+ userId),{
        userName: userName,
        email: email,
        birthDate: birthDate,
        majority: majority
    });
    }

    static async getUserName(userId){
        let userName = (await get(child(ref(this.database),`users/${userId}/userName`))).val();
        console.log(userName,"dbhandler");
        return userName
    }
}