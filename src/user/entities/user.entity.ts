import { FinancialHistory } from "src/financial-history/entities/financial-history.entity";
import { Microcredit } from "src/microcredit/entities/microcredit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
        name: string;
    
    @Column()
    creditScore: number

    // @OneToMany(() => Microcredit, (microcredit) => microcredit.user)
    // microcredits: Microcredit[];

    // @OneToMany(() => FinancialHistory, (financialHistory) => financialHistory.user)
    // financialHistory: FinancialHistory;

}
