import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { UpdatePostDto } from './dto/update-post-dto.js';
import { CreatePostDto } from './dto/create-post.dto.js';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createData: CreatePostDto): Promise<void> {
    const post = this.postRepository.create(createData);
    await this.postRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findOne(id: number): Promise<Post | null> {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: number, updateData: UpdatePostDto): Promise<void> {
    await this.postRepository.update(id, updateData);
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
