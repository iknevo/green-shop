import { blog1, blog2, blog3, blog4 } from "../assets";
import BlogPost from "./BlogPost";

export default function BlogPosts() {
  return (
    <div className="mb-30 grid grid-cols-4 justify-center gap-16">
      <BlogPost
        img={blog1}
        read="September 12 I Read in 6 minutes"
        title="Cactus & Succulent Care Tips"
        text="Cacti are succulents are easy care plants for any home or patio."
      />
      <BlogPost
        img={blog2}
        read="September 13 I Read in 2 minutes"
        title="Top 10 Succulents for Your Home"
        text="Best in hanging baskets. Prefers medium to high light."
      />
      <BlogPost
        img={blog3}
        read="September 15 I Read in 3 minutes"
        title="Cacti & Succulent Care Tips"
        text="Cacti and succulents thrive in containers and because most are.."
      />
      <BlogPost
        img={blog4}
        read="September 15 I Read in 2 minutes"
        title="Best Houseplants Room by Room"
        text="The benefits of houseplants are endless. In addition to.."
      />
    </div>
  );
}
