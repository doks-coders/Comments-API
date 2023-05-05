import { Entity, BaseEntity, BeforeInsert, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany,ManyToOne,JoinColumn, ManyToMany,JoinTable } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { ApiProperty } from "@nestjs/swagger/dist" 
import { SingleComment } from '../../comments/entities/comment.entity'
import { Item } from 'src/modules/items/entities/item.entity'

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({description:'Id of User'})
    id: number

    @ApiProperty({description:'Name of User',example:'Daniel Odokuma'})

    @Column({
        type: 'varchar'
    })
    name: string

    @ApiProperty({description:'User Email',example:'guonnie@gmail.com'})
    @Column({
        unique: true,
        type: 'varchar'
    })
    email: string

    @ApiProperty({description:'User Hashed password',example:'***********'})
    @Column({
        type: "varchar",
        select:false
    })
    password: string


    @ManyToMany(()=>SingleComment)
    @JoinTable()
    allcomments:SingleComment [] 



    @ManyToMany(()=>Item)
    @JoinTable()
    allitems:Item [] 

    





    @ApiProperty({description:'Date of Added User'})
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty({description:'Date of Updated User'})
    @UpdateDateColumn()
    updatedAt: Date


    
    @OneToMany(type =>SingleComment,comment=>comment.user)
    @JoinColumn()
    comments:SingleComment[];

    
    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password || this.password, salt)
    }

}