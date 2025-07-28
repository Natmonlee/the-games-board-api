import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

export type MockType<T> = {
  [P in keyof T]: jest.Mock<any, any>;
};

const repositoryMockFactory: () => Partial<MockType<Repository<Post>>> =
  jest.fn(() => ({
    save: jest.fn(),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  }));

const mockPost = {
  id: 1,
  author: 'Test Author',
  tagline: 'Test Tagline',
  content: 'Test Content',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('PostService', () => {
  let service: PostService;
  let repositoryMock: MockType<Repository<Post>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    repositoryMock = module.get(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should save a post in the database', async () => {
      const createPostDto = {
        author: 'sample author',
        tagline: 'sample tagline',
        content: 'sample content',
      };

      repositoryMock.create.mockReturnValue(mockPost);
      repositoryMock.save.mockResolvedValue(mockPost);

      await service.create(createPostDto);

      expect(repositoryMock.create).toHaveBeenCalledWith(createPostDto);
      expect(repositoryMock.save).toHaveBeenCalledWith(mockPost);
    });
  });
});
