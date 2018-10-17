export class Autenticacion{
  constructor(
    public email: string,
    public password: string,
    public nombre: string,
    public apellido: string,
    public rut: string,
    public telefono: number
  ){}
}
