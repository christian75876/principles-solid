import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type FinancialHistory = {
    date: Date,
    transactionAmount: number,
    balance: number,
    type: string,
    description: string,
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
        name: string;
    
    @Column()
    creditScore: number

    @Column()
    financialHistory: FinancialHistory
}
