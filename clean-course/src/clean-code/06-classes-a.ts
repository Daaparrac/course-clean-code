(() => {

  //  No aplicando el principio de resposabilidad única
  type Gender = "M" | "F";
  
  class Person {
    constructor(
      public name     : string,
      public gender   : Gender,
      public birthDate: Date
    ) {}
  }



class User extends Person {
  public lastAccess: Date;

  constructor(
    public email: string,
    public rol  : string,
    name        : string,
    gender      : Gender,
    birthDate   : Date,
  ) {
    super(name, gender, birthDate);
    this.lastAccess=new Date();
  }
checkCredencial():boolean{
  return true
}
}

class UserSettings extends User {
  constructor(
    public workingDirectory: string,
    public lastOpenFolder  : string,
    email                  : string,
    role                   : string,
    name                   : string,
    gender                 : Gender,
    birthDate              : Date,
  ) {
    super(email,role,name,gender,birthDate)
  }
}

const userSettings = new UserSettings(
  '/user/home',
  '/user/desktop',
  'daniel@gmail.com',
  'Jefesito',
  'Daniel Parra',
  'M',new Date('1997-01-26')
  )
  
  console.log( userSettings );


// const newUser = new User()

  // const newPerson = new Person("Daniel", "M", new Date("1997-01-26"));
  // console.log({ newPerson });






})();
