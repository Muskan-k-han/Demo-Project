export class Customer{
    id:number;
      name:string;
  
      constructor(id:number,name:string){
          this.id=id;
          this.name=name;
      }
  
      getName():string{
          return this.name;
        
        }

        getId():number{
          return this.id;
        }
      
  }