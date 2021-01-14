// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

/////////////////////////////////////////////////////////

import { BlogPost } from '../../../../week-05/day-03/data-structures/blog-post';

let lorem = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let popular = new BlogPost(
  'Tim Urban',
  'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.',
  '2017.03.28.'
);
let engineer = new BlogPost(
  ' William Turton',
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention.' +
    'When I asked to take his picture outside one of IBM’s New York City officeshe told me that he wasn’t really into the whole organizer profile thing.',
  '2000.05.04.'
);

/////////////////////////////////////////////////////////

class Blog {
  memory: BlogPost[];

  constructor(BlogPost: BlogPost[]) {
    this.memory = BlogPost;
  }

  delete(int: number): BlogPost[] {
    this.memory.splice(int - 1, 1);
    return this.memory;
  }

  update(int: number, BlogPost: BlogPost): BlogPost[] {
    this.memory.splice(int - 1, 1, BlogPost);
    return this.memory;
  }
}

//////////////////////////////////////////////////////////

//Test

let myBlog = new Blog([lorem, popular, engineer]);
myBlog.update(2, engineer);
myBlog.delete(2);
console.log(myBlog);
