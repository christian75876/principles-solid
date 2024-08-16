import { User } from './../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('microcredits')
export class Microcredit {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => User, (user) => user.microcredits)
    user: User;

    @Column()
    amount: number;

    @Column()
    interestRate: number;

    @Column()
    status: string;

    
}
