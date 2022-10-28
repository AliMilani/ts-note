function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    // We use this variable to hold the value behind the
    // target property.
    let value: string;
    // We create a descriptor for the target property.
    const descriptor: PropertyDescriptor = {
      get:() => value,
      // We're defining the setter for the target property.
      set(newValue: string) {
        if (newValue.length < length) throw new Error();
        value = newValue;
      },
    };
    // And finally, we redefine the property.
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

let user = new User('1234');
console.log(user.password);