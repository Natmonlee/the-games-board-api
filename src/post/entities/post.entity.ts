import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  author: string;

  @Column({ type: 'varchar', length: 100 })
  tagline: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
