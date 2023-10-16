import styles from "./page.module.css";
import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: { select: { name: true } },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log("posts", { posts });
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      <p>
        {posts.map((post) => {
          <ul key={post.id}>
            <li>{post.title}</li>
            <li>{post.content}</li>
            <li>{post.published}</li>
            <li>{post.createdAt}</li>
            <li>{post.updatedAt}</li>
            <li>{post.author.name}</li>
            <li>{post.author.email}</li>
          </ul>;
        })}
      </p>
    </main>
  );
}
