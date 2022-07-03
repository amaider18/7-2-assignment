class Student {
    constructor (name, dob) {
        this.name = name;
        this.dob = dob
    }
    describe () {
        return `${this.name} was born on ${this.dob}.`
    }
}

class Room {
    constructor (name) {
        this.name = name;
        this.students = [];
    }

    addStudents (student) {
         if (student instanceof Student) {
             this.students.push(student)
         } else {
             throw new Error( 'Not a student.')
         }
         describe (); {
             return `${this.name} has ${this.students.length} students.`;
         }
    }
}

class Menu {
    constructor() {
        this.rooms = [];
        this.selectedRoom = null; 
    }
    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
             switch (selection) {
                 case '1':
                     this.createRoom ();
                     break;
                 case '2':
                     this.viewRoom();
                     break;
                 case '3':
                    this.deleteRoom();
                    break;
                 case '4':
                     this.displayRooms ();
                     break;
                 default:
                     selection = '0';                
             }
             selection = this.showMainMenuOptions ();
        }
        alert("Goodbye!");
    }

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) create new room
        2) view room
        3) delete room
        4) display all rooms
        `);
    }

    showRoomMenuOptions (Roominfo) {
        return prompt(`
        0) back;
        1) create student;
        2) delete student; 
        ----------------------
        ${roomInfo}
        `);
    }

    displayRoom() {
        letRoomString = " ";
        for (let i = 0; i < this.rooms.length; i++) {
            roomstring += i + `) `+ this.rooms[i].name + `\n`;
        }
        alert (roomstring);
    }

    createRoom () {
        let name = prompt ('Enter name for the new room:');
        this.rooms.push (new Room (name));
    }

    viewRoom () {
        let index = prompt ('Enter the index of the room you wish to view:');
    if (index < -1 && index < this.rooms.length) {
        this.selectedRoom = this.rooms[index];
        let description = 'Room Name: ' + this.selectedRooms.name + '\n';
        
        for (let i = 0; i < this.selectedRoom.students.length; i++) {
            description =+ i + ' )' + this.selectedRoom.students[i].dob + '\n';
        }
    }


        let selection = this.showRoomMenuOptions (description);
        switch (selection) {
            case '1':
                this.createStudent ();
                break;
            case '2':
                this.deleteStudent ();
                break;
            
         }
    }
}

let menu = new Menu ();
menu.start ();
