const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'posts.json');

function loadPosts() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function savePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
}

// Serve static pages
app.get('/features.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'features.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Home page listing posts
app.get('/', (req, res) => {
  const posts = loadPosts();
  res.render('index', { posts });
});

// New post form
app.get('/new', (req, res) => {
  res.render('new');
});

// Create post
app.post('/new', (req, res) => {
  const posts = loadPosts();
  const { title, content } = req.body;
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  posts.push({ id, title, content });
  savePosts(posts);
  res.redirect('/');
});

// View single post
app.get('/posts/:id', (req, res) => {
  const posts = loadPosts();
  const post = posts.find(p => p.id === parseInt(req.params.id, 10));
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render('post', { post });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
