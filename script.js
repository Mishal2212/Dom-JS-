const people = [
  {
    fullName: "Elon Musk",
    image: "https://www.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg",
    profession: "Entrepreneur",
    description: "CEO of Tesla and SpaceX, known for innovation in technology and space exploration.",
    tags: ["Business", "Technology", "Innovation"]
  },
  {
    fullName: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    profession: "Singer",
    description: "Global pop star and songwriter famous for storytelling through music.",
    tags: ["Music", "Pop", "Performer"]
  },
  {
    fullName: "Virat Kohli",
    image: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/11/Virat-Kohli-6.webp",
    profession: "Cricketer",
    description: "One of the greatest modern-day batsmen and former captain of the Indian cricket team.",
    tags: ["Sports", "Cricket", "Fitness"]
  },
  {
    fullName: "Sundar Pichai",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    profession: "CEO of Google",
    description: "Technology executive leading Google and Alphabet with focus on AI and innovation.",
    tags: ["Technology", "Leadership", "AI"]
  },
  {
    fullName: "Priyanka Chopra",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
    profession: "Actor",
    description: "International actress and producer known for Bollywood and Hollywood projects.",
    tags: ["Acting", "Entertainment", "Fashion"]
  }
];

var sum=``
people.forEach(function(elem){
   sum=sum+`<div class="card">
    <img src="${elem.image}" alt="">
    <h3>${elem.fullName}</h3>
    <h4>${elem.profession}</h4>
    <p>${elem.description}</p>
    <p>${elem.tags}</p>
  </div>`
})

document.querySelector("body").innerHTML=sum;