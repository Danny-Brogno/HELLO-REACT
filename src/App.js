import './App.css';

// 1. **REUSABLE COMPONENT:** Keep this component but remove the hardcoded content for now.
function ProfileCard({name,jobTitle,bio,image}) {
  // We will pass data into this component via props in Step 3
  return (
    <div class="box">
      <span></span>
      <div class="content">
        <h2 class="name">{name}</h2> 
        <p class="job">{jobTitle}</p>
        <p class="description">{bio}</p>
        <img class="image" src={image} alt={image}></img>
        <div class="ciao">
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

// 2. **MAIN APP COMPONENT:** This will hold the data and handle the rendering.
function App() {
  
  const people = [
    { 
      name: "Alice", 
      jobTitle: "Developer", 
      bio: "Alice builds beautiful, responsive front-end interfaces.", 
      image: "/1.png" 
    },
    { 
      name: "Bob", 
      jobTitle: "Firefighter", 
      bio: "Bob is dedicated to public safety and emergency response.",
      image: "/2.png"
    },
    { 
      name: "Charlie", 
      jobTitle: "Doctor", 
      bio: "Charlie specializes in internal medicine and patient care.",
      image: "/3.png"
    },
    { 
      name: "David", 
      jobTitle: "Chef", 
      bio: "David creates culinary masterpieces with a focus on local ingredients.", 
      image: "/4.png" 
    },
    { 
      name: "Eva", 
      jobTitle: "Architect", 
      bio: "Eva designs sustainable urban spaces that blend modern aesthetics with nature.",
      image: "/5.png"
    }
  ];

  return (
    <div className="ProfileCard"> 
      {people.map((person) => (
      // The key prop is REQUIRED when rendering lists in React.
        <ProfileCard 
          key={person.name} // Use a unique identifier (name works here)
          name={person.name}
          jobTitle={person.jobTitle}
          bio={person.bio}
          image={person.image}
        />
      ))}
    </div>
  );
}

export default App;
