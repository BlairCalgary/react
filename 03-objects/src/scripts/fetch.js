export class Data {
    constructor(data) {
        this.users = data
    }
    getFirstName() {
        return this.users[0].name;
    }
    getAllFirstNames() {
        var mapArray = this.users.map((d) => d.name);
        return mapArray;
    }
}


// getAllFirstNames(data) {
//     return data.map((d, i, x) => d.name);
// },