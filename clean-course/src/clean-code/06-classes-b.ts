(() => {
  //  No aplicando el principio de resposabilidad única
  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: string;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }
    checkCredencial(): boolean {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/user/desktop",
    email: "daniel@gmail.com",
    role: "Jefesito",
    name: "Daniel Parra",
    gender: "M",
    birthdate: new Date("1997-01-26")
  });

  console.log(userSettings);

  // const newUser = new User();

  // const newPerson = new Person("Daniel", "M", new Date("1997-01-26"));
  // console.log({ newPerson });
})();
