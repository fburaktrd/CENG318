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
    set(ref(this.database,'userNames/'+ userName),{uid:userId});
    }

    static async getUserName(userId){
        let userName = (await get(child(ref(this.database),`users/${userId}/userName`))).val();
        console.log(userName,"dbhandler");
        return userName
    }

    static async isUserExist(userName){
        let exists = (await get(child(ref(this.database),`userNames/${userName}`))).val();
        if (exists === null){
            return false
        }
        return exists.uid // it might return true take a look at later
    }

    
}
console.log(DatabaseHandler)