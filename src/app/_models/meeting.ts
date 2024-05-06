import { Observable, catchError, map } from "rxjs";

export class Meeting {
  _id?: string;
  name: string;
  roomSid?: string;
  users: User[];
  contentList: any;

  constructor(data:Meeting) {
    this._id = data._id;
    this.name = data.name;
    this.roomSid = data.roomSid;
    this.users = data.users.map(user => new User(user));
    this.contentList = data.contentList;
    // ...
  }
}

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  dealerName: string;
  location: string;
  role: 'attendee' | 'host' | 'participant';
  videoServiceId: string;
  profilePic?: string;
  __v?: string;

  constructor(data:User) {
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.dealerName = data.dealerName;
    this.location = data.location;
    this.role = data.role;
    this.videoServiceId = data.videoServiceId
  }

  get isHost(): boolean {
    return this.role === 'host';
  }

  get isAttendee(): boolean {
    return this.role === 'attendee';
  }

  get isParticipant(): boolean {
    return this.role === 'participant';
  }

  get isClient(): boolean {
    return this.isAttendee || this.isParticipant;
  }
}

