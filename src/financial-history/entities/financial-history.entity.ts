import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('financial_histories')
export class FinancialHistory {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    date: Date;

    @Column()
    transactionAmount: number;

    @Column()
    balance: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @OneToOne(() => User, (user) => user.financialHistory)
    user: User;

}
