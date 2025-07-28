# The Games Board - Backend

A NestJS API connected to a PostgreSQL database, with endpoints to get, create, update, and delete blog posts.

## Live Demo

https://the-games-board.vercel.app/

The frontend is hosted on Vercel and communicates with a backend hosted on an AWS EC2 instance using a PostgreSQL database.

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Axios

## Environment Variables

To run this project, create a `.env` file in the root of the project and add the following variables, you can change them to match your setup:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=postgres
## Install and Run Locally

Download files and unzip or clone with command below

```bash
  git clone https://github.com/Natmonlee/the-games-board-api.git
```

Go to the project directory

```bash
  cd the-games-board-api
```

Install dependencies

```bash
  npm install
```
Run database migrations (after ensuring PostgreSQL is running)

```bash
  npm run migration:run
```
Start the server 

```bash
  npm run start
```

IMPORTANT: If your backend runs on a port other than 3000, update the URL in the frontend at:
the-games-board/src/utils/getBackendUrl.ts

## API Reference

CreatePostDto {
  author: string;    // max length: 30
  tagline: string;   // max length: 100
  content: string;
}

UpdatePostDto {
  author?: string;    // max length: 30
  tagline?: string;   // max length: 100
  content?: string;
}

HTTP Endpoints:

GET /post
Get all posts

GET /post/:id
Get a single post by ID

POST /post
Create a new post
@Body() createPostDto: CreatePostDto

PATCH /post/:id
Update an existing post
@Body() updatePostDto: UpdatePostDto

DELETE /post/:id
Delete a post

## Potential Improvements

- Return clearer responses from the API (e.g. “Post created successfully”) to improve frontend handling.
- Implement more robust testing. I followed tutorials to get started and included basic tests using Jest, but found testing more challenging in the NestJS framework.
- Add security features such as rate limiting and user authentication. The brief specified public access, so I kept it open intentionally.
- For a production-ready API, I would include pagination to prevent performance issues from loading large datasets and API keys to prevent misuse.

## Reflections

- Working with PostgreSQL locally and on an EC2 instance was the biggest learning curve. I had only used hosted databases before, so setting one up from scratch — including migrations — was a real challenge.
- Configuring PostgreSQL on EC2 required editing config files to gain access. This took a lot of trial and error.
- I found TypeORM very useful, especially features like automatic timestamp columns.
- Using NestJS was a big improvement over Express (which I was more familiar with). The structure and decorators made it faster to build.

