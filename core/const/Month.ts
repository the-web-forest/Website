export interface IMonth {
  name: string;
  seqNumber: number;
  days: number;
}

const Months: IMonth[] = [
  {
    name: 'Janeiro',
    seqNumber: 1,
    days: 31,
  },
  {
    name: 'Fevereiro',
    seqNumber: 2,
    days: 28,
  },
  {
    name: 'Março',
    seqNumber: 3,
    days: 31,
  },
  {
    name: 'Abril',
    seqNumber: 4,
    days: 30,
  },
  {
    name: 'Maio',
    seqNumber: 5,
    days: 31,
  },
  {
    name: 'Junho',
    seqNumber: 6,
    days: 30,
  },
  {
    name: 'Julho',
    seqNumber: 7,
    days: 31,
  },
  {
    name: 'Agosto',
    seqNumber: 8,
    days: 30,
  },
  {
    name: 'Setembro',
    seqNumber: 9,
    days: 31,
  },
  {
    name: 'Outubro',
    seqNumber: 10,
    days: 30,
  },
  {
    name: 'Novembro',
    seqNumber: 11,
    days: 31,
  },
  {
    name: 'Dezembro',
    seqNumber: 12,
    days: 30,
  },
];

export default Months;
