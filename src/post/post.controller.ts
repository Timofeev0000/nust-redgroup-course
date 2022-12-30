import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto copy';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    async getAll() {
        return this.postService.getAll()
    }

    @Post()
    async create(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @Get(':id')
    async getById(@Param('id') id:string) {
        return this.postService.getById(id)
    }
    
    @Put(':id')
    async update(@Param('id') id:string, @Body() dto: CreatePostDto) {
        return this.postService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        return this.postService.delete(id)
    }
}
