import { Entity, BaseEntity, BeforeInsert, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany,JoinColumn, ManyToMany,JoinTable } from 'typeorm'
import { SingleComment } from '../../comments/entities/comment.entity'

import * as bcrypt from 'bcrypt'
import { ApiProperty } from "@nestjs/swagger/dist" 
import { User } from 'src/modules/users/entities/user.entity'
@Entity('items')
export class Item extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({description:'Id of Item'})
    id: number

    @ApiProperty({description:'Name of Item',example:'Toothbrush'})

    @Column({
        type: 'varchar'
    })
    name: string

    @OneToMany(type =>SingleComment,comment=>comment.item)
    @JoinColumn()
    comments:SingleComment[];

   
    @ManyToMany(()=>User)
    @JoinTable()
    users:User []


    @ApiProperty({description:'Date of Added User'})
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty({description:'Date of Updated User'})
    @UpdateDateColumn()
    updatedAt: Date


}