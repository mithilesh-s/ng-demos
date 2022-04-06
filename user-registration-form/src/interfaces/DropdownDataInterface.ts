export  interface Country extends Array<{id:number, name:string}>{}
export  interface State extends Array<{id:number,country_name:string, name:string}>{}
export  interface City extends Array<{id:number,state_name:string,country_name:string, name:string}>{}
    
