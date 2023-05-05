import { Entity, BaseEntity,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,ManyToOne,JoinColumn,OneToMany,ManyToMany,JoinTable } from 'typeorm'

import { ApiProperty } from "@nestjs/swagger/dist" 
import { User } from '../../users/entities/user.entity'
import { Item } from '../../items/entities/item.entity'


@Entity('comments')
export class SingleComment extends BaseEntity {


    @PrimaryGeneratedColumn()
    @ApiProperty({description:'Id of User'})
    id: number

    @ApiProperty({description:'Text',example:'I love it'})

    @Column({
        type: 'varchar'
    })
    text: string


    @Column({
        type: 'varchar'
    })
    userId: number


    @ManyToOne(()=>SingleComment,comment=>comment.replies)
    @JoinColumn()
    parentComment:SingleComment

    @OneToMany(()=>SingleComment,comment=>comment.parentComment)
    replies:SingleComment[]

    @ManyToOne(()=>User,(user)=>user.comments)
    @JoinColumn()
    user:User



    @ManyToOne(()=>Item,(item)=>item.comments)
    @JoinColumn()
    item:Item


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