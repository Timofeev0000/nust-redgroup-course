import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Repository } from "typeorm";
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {}

    async getAll() {
        return this.postRepository.find()
    }

    async create(dto: CreatePostDto) {
        const post = this.postRepository.create(dto)
        return this.postRepository.save(post)
    }

    async getById(id:string) {
        return this.postRepository.findOne({
            where: {
                id: Number(id)
            }
        })
    }
    
    async update(id: string, dto: CreatePostDto) {
        const post = await this.getById(id)
        post.content = dto.content
        post.userName = dto.userName

        return this.postRepository.save(post)
    }

    async delete(id:string) {
        return this.postRepository.delete({ id: Number(id) })
    }
}
