function Device(name) {
    this.name = name;
    this.model = String();
    this.active = false;
    this.power = 0;
}
Device.prototype.turnOn = function () {
    this.active = true;
}
Device.prototype.turnOff = function () {
    this.active = false;
}

Computer.prototype = new Device("Компьютер");
function Computer(model, power) {
    this.model = model;
    this.mode = 1;
    this.power = power;
}
Computer.prototype.setMode = function (mode) {
    this.mode = mode;
    this.power *= mode;
}

Router.prototype = new Device("Роутер");
function Router(model, power) {
    this.model = model;
    this.power = power;
    this.workload = 1;
}
Router.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.power *= workload;
}

const Computer1 = new Computer("Asus", 200);
const Computer2 = new Computer("Hp", 125);
const Keenetic = new Router("Keenetic", 120);
const Megafon = new Router("Megafon", 50);

Computer1.turnOn();
Computer2.turnOn();
Computer2.setMode(2);
Keenetic.turnOff();
Megafon.turnOn();
Megafon.setWorkload(3);

console.log(getPower([Computer1, Computer2, Keenetic, Megafon]));

function getPower(devices) {
    let answer = "В розетку подключены: \n";
    let power = 0;
    devices.forEach((element) => {
        if (element.active) {
            answer += element.name + " \"" + element.model + "\" (" + element.power + " Вт)\n";
            power += element.power;
        }
    });

    answer += "Мощность: " + power + " Вт.";

    return answer;
}