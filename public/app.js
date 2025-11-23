const Hambuger = document.getElementById("mobile-menu");

const Open = () => {
  Hambuger.classList.toggle("hidden");
};

const img = document.getElementById("Clasoure");
const Heading = document.getElementById("Heading");
const testimonialRev = document.getElementById("testimonialReviews");
let imageIndex = 0;
let HeadingIndex = 0;
let testimonialIndex = 0;
const images = [
  `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687`,
  `https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472`,
  "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
];
const testimonialHeadings = [
  "Best Developers We've Worked With",
  "Exceptional Product Mindset and Delivery",
  "True Engineering Precision and Reliability",
];
const testimonialReviews = [
  "Partnering with this team was a turning point for our business. The codebase is clean, scalable, and optimized — everything you’d expect from senior-level engineers who actually care about product impact.",
  "Their technical depth and design sense are unmatched. Every sprint delivered stable builds, clear documentation, and a UI that performs flawlessly across devices. It felt like working with a world-class in-house team.",
  "They don’t just build apps — they architect systems. From API efficiency to pixel-perfect React components, their attention to detail and performance mindset saved us months of future refactoring.",
];

const UpdateImage = () => {
  img.src = images[imageIndex];
  Heading.innerHTML = testimonialHeadings[HeadingIndex];
  testimonialRev.innerHTML = testimonialReviews[testimonialIndex];
};
const Previous = () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  HeadingIndex =
    (HeadingIndex - 1 + testimonialHeadings.length) %
    testimonialHeadings.length;
  testimonialIndex =
    (HeadingIndex - 1 + testimonialReviews.length) % testimonialReviews.length;

  UpdateImage();
};
const Next = () => {
  imageIndex = (imageIndex + 1) % images.length;
  HeadingIndex = (HeadingIndex + 1) % testimonialHeadings.length;
  testimonialIndex = (testimonialIndex + 1) % testimonialReviews.length;

  UpdateImage();
};
