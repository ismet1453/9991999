// Welcome message
console.log("Welcome to 02Read! Dive into the world of stories.");

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀';
    }
});

// Page content change
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href').slice(1);
        document.querySelectorAll('main > section').forEach(section => {
            section.style.display = section.id === target ? 'block' : 'none';
        });
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Book visibility on scroll
const books = document.querySelectorAll('.book');
window.addEventListener('scroll', () => {
    books.forEach(book => {
        const rect = book.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            book.classList.add('visible');
        }
    });
});

// Dynamic titles
const titles = ["Welcome to 02Read", "Discover the darkest tales", "Explore Gothic Stories"];
let titleIndex = 0;
setInterval(() => {
    document.querySelector('h1').innerText = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}, 3000);

// Book details
const bookData = [
    {
        id: 1,
        title: "Book Title 1",
        description: "Book 1 description goes here...",
        image: "src/images/1.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 2,
        title: "Book Title 2",
        description: "Book 2 description goes here...",
        image: "src/images/2.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 3,
        title: "Book Title 3",
        description: "Book 3 description goes here...",
        image: "src/images/3.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 4,
        title: "Book Title 4",
        description: "Book 4 description goes here...",
        image: "src/images/4.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 5,
        title: "Book Title 5",
        description: "Book 5 description goes here...",
        image: "src/images/5.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 6,
        title: "Book Title 6",
        description: "Book 6 description goes here...",
        image: "src/images/6.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 7,
        title: "Book Title 7",
        description: "Book 7 description goes here...",
        image: "src/images/7.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 8,
        title: "Book Title 8",
        description: "Book 8 description goes here...",
        image: "src/images/8.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 9,
        title: "Book Title 9",
        description: "Book 9 description goes here...",
        image: "src/images/9.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    },
    {
        id: 10,
        title: "Book Title 10",
        description: "Book 10 description goes here...",
        image: "src/images/10.jpg",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"]
    }
];

document.querySelectorAll('.book').forEach(bookElement => {
    bookElement.addEventListener('click', () => {
        const bookId = parseInt(bookElement.getAttribute('data-id'));
        const book = bookData.find(b => b.id === bookId);

        if (book) {
            document.getElementById('book-image').src = book.image;
            document.getElementById('book-title').textContent = book.title;
            document.getElementById('book-description').textContent = book.description;

            const chaptersList = document.getElementById('chapters-list');
            chaptersList.innerHTML = '';
            book.chapters.forEach(chapter => {
                const li = document.createElement('li');
                li.textContent = chapter;
                li.setAttribute('data-chapter', chapter);
                li.addEventListener('click', openChapter);
                chaptersList.appendChild(li);
            });

            document.querySelectorAll('main > section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById('book-details').style.display = 'block';

            // Adding entry animation
            document.getElementById('book-details').classList.add('fade-in');
            setTimeout(() => {
                document.getElementById('book-details').classList.remove('fade-in');
            }, 1000);
        }
    });
});

// Open chapter details
function openChapter(event) {
    const chapterTitle = event.target.getAttribute('data-chapter');
    document.getElementById('chapter-title').textContent = chapterTitle;
    document.getElementById('chapter-text').innerHTML = `<p>Text of ${chapterTitle} goes here...</p>`;

    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('chapter-details').style.display = 'block';

    // Adding entry animation
    document.getElementById('chapter-details').classList.add('fade-in');
    setTimeout(() => {
        document.getElementById('chapter-details').classList.remove('fade-in');
    }, 1000);
}

// Add comment
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentList = document.getElementById('comments-list');
        const comment = document.createElement('div');
        comment.textContent = commentText;
        commentList.appendChild(comment);
        commentInput.value = '';
    }
});