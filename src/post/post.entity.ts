import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'Post' })
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    userName: string
}