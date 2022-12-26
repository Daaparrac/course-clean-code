(() => {
  // Aplicando el principio de resposabilidad única
  // Priorizar la composición frente a la herencia
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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }
    checkCredencial(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/user/desktop",
    email: "daniel@gmail.com",
    role: "Jefesito",
    name: "Daniel Parra",
    gender: "M",
    birthdate: new Date("1997-01-26"),
  });

  console.log(userSettings);

  // const newUser = new User();

  // const newPerson = new Person("Daniel", "M", new Date("1997-01-26"));
  // console.log({ newPerson });
})();
