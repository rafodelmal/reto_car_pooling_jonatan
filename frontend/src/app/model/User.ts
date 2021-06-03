export class User {

    id:number;
    username:string;
    password:string;
    phone:string;
    rol:string;
    placa:string;
   
 


        constructor(login){
            this.id=login.id;
            this.username=login.username;
            this.password=login.password;
            this.phone=login.phone;
            this.rol=login.rol;
            this.placa=login.placa;
      
    
        }
 
    
    
    
    
    }