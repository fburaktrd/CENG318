import { getDatabase,ref, set } from "firebase/database";

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
}