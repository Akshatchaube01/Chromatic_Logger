export class Log{
    static success(msg :string){
        console.log(`%c ${msg}`,`color:green`);
    }

    static danger(msg :string){
        console.log(`%c ${msg}`,`color:red; background-color:yellow`);
    }

    static sky(msg: string){
        console.log(`%c ${msg}`,`color:blue`);
    }

    static my_color(msg : string, color: string){
        console.log(`%c ${msg}`,`color:${color}`);
    }

}