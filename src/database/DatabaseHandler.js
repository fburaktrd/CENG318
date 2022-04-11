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

    static async getUserEventIds(userName){
        let events = (await get(child(ref(this.database),`userEvents/${userName}`))).val();
        return Object.keys(events)

    }

    static async getEventInfo(eventId){
        let event_info = (await get(child(ref(this.database),`events/${eventId}`))).val();
        let event_participants = (await get(child(ref(this.database),`participantsOfEvent/${eventId}`))).val()
        //console.log(event_participants,"a")
        event_info = {...event_info,participants:event_participants}
        //console.log(event_info,`eventId:${eventId} icin`);
        return event_info;
    }

    

    static async getUserEventInfos(userName){// critical
        let event_ids = Object.keys((await get(child(ref(this.database),`userEvents/${userName}`))).val());
        let events_info = [];
        event_ids.forEach((eventId) => events_info.push(this.getEventInfo(eventId)))
        ///events_info.forEach(event => console.log(event.title),"asd")
        return events_info;
    }

}
