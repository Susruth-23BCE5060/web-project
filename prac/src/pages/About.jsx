function About() {
    const teamMembers = [
      { id: '23BCE5061', name: 'Divyaroop Sagar K' },
      { id: '23BCE5060', name: 'Susruth P' },
      { id: '23BCE1300', name: 'Bhumica N' }
    ];
    
    return (
      <div>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>About Our Headphones Shop</h1>
            <p style={styles.heroSubtitle}>Discover the passion behind our audio excellence</p>
          </div>
        </section>
        
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <div style={styles.storyContent}>
            <p>
              Founded in 2020, HeadphonesShop started with a simple mission: to provide high-quality audio products that enhance the listening experience for everyone. Our journey began when a group of audio enthusiasts came together with the vision of creating a store that offers premium headphones at accessible prices.
            </p>
            <p>
              What sets us apart is our dedication to sound quality, comfort, and customer satisfaction. We carefully select each product in our inventory, ensuring that it meets our rigorous standards. Our team consists of audio engineers, product specialists, and customer service experts who are passionate about helping customers find the perfect headphones for their needs.
            </p>
          </div>
        </section>
        
        <section style={styles.teamSection}>
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <div style={styles.teamGrid}>
            {teamMembers.map(member => (
              <div key={member.id} style={styles.teamCard}>
                <div style={styles.avatar}></div>
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberId}>{member.id}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  const styles = {
    hero: {
      background: 'linear-gradient(90deg, #377DFF 0%, #4F8CFF 100%)',
      color: 'white',
      padding: '3rem 1rem',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
    },
    section: {
      maxWidth: '800px',
      margin: '0 auto 3rem',
      padding: '0 1rem',
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    storyContent: {
      lineHeight: 1.6,
    },
    teamSection: {
      padding: '2rem 1rem',
      background: '#f7f7f7',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
    teamGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    teamCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '200px',
      textAlign: 'center',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: '#e0e0e0',
      margin: '0 auto 1rem',
    },
    memberName: {
      margin: '0.5rem 0',
    },
    memberId: {
      color: '#666',
      margin: '0.5rem 0',
    },
  };
  
  export default About;
  