import {
  get,
  getDatabase,
  child,
  ref,
  update,
  set,
  onValue,
} from "firebase/database";

export class SocialHandler {
  static database = getDatabase();

  static async getFriend(userId,recieverUid) {
    return (await get(ref(this.database, "friends/" + userId + "/" + recieverUid))).val();
  }

  static async getFriendRequests(userId) {
    return  (await get(ref(this.database, "friendRequests/" + userId))).val();
  }

  static async sendFriendRequest(senderUsername, recieverUsername) {
    set(
      ref(
        this.database,
        "friendRequests/" + recieverUsername + "/" + senderUsername
      ),
      true
    );
  }
  static removeFriendRequest(username,senderUsername){
    set(ref(this.database,"friendRequests/"+username + "/"+senderUsername),{});
  }
  static acceptFriend(username,senderUsername){
      this.removeFriendRequest(username,senderUsername)
      set(ref(this.database,"friends/"+username + "/"+senderUsername),true);
  }

  static async getUsername(username){
    return  (await get(ref(this.database,"userNames/"+username))).val()
  }

  static sendMessage(eventId, userInfo, message) {
    set(
      ref(this.database, "eventComments/" + eventId + "/" + `${+new Date()}`),
      { username: userInfo.userName, message: message }
    );
  }

  static listenMessagges(eventId, setState) {
    onValue(ref(this.database, "eventComments/" + eventId), (snapshot) => {
      const data = snapshot.val();

      setState(data);
    });
  }
}
