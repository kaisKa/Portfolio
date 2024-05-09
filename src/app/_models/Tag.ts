export class Tag{

  static readonly ANGULAR = new Tag('Angular','red')
  static readonly JAVA = new Tag('Java','blue')
  static readonly SPRINGBOOT = new Tag('Spring Boot','green')
  static readonly TYPESCRIPT = new Tag('Type Script','pink')
  static readonly NESTJS = new Tag('Nest js','red')
  private constructor(public key:string, public color:string){}
  toString(){
    return this.key;
  }
}

