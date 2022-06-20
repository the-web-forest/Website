export default class ContactDataDTO {
  public name: string = '';
  public email: string = '';
  public message: string = '';

  public nameError: boolean = false;
  public emailError: boolean = false;
  public messageError: boolean = false;

  public static getInstance(): ContactDataDTO {
    return new ContactDataDTO();
  }
}
