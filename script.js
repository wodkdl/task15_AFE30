const myInfo = {
    name:"Anna",
    age:"15",
    height:"170",
    place:"Brovary"
};

for(const key in myInfo) {
    console.log(`${key}: ${myInfo[key]}`)
}

const myInfoJSON = JSON.stringify(myInfo);

const newInfo = JSON.parse(myInfoJSON);

const infoClone = Object.assign({}, myInfo);
infoClone.name = "a";
infoClone.height = "171";

for(const key in infoClone) {
    console.log(`${key}: ${infoClone[key]}`)
}

const contacts = new Map();
contacts.set("friend1", "5465466513")
contacts.set("friend2", "5465466513")
contacts.set("friend3", "5465466513")


for (const [friendName, phoneNumber] of contacts) {
    console.log(`${friendName}: ${phoneNumber}`);
}