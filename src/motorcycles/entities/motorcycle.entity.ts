export class Motorcycle {

  id: string;
  
  marca: string;

  modelo: string;

  cilindrada: number;

  año: number;

  constructor(
    id: string,
    marca: string,
    modelo: string,
    cilindrada: number,
    año: number,
  ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.año = año;
  }
}