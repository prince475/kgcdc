

// Contact component
const Contact = () => {
  // Import the contactData array
  const contactData = [
    {
      title: "Our Contact Information",
      description: "We'd love to hear from you! Whether you have questions about our programs, need more information on how to sponsor a child, or want to get involved, please don't hesitate to reach out. Your support and interest are crucial in helping us make a lasting impact."
    }
  ];

  return (
    <div className=" px-20 py-20">
      {contactData.map((contact, index) => (
        <div key={index}>
          <h1 className="text-6xl py-4">{contact.title}</h1>
          <p className="font-montserrat text-[20px] py-4">{contact.description}</p>
          <p className="font-montserrat text-[20px]"> <span className="font-bold mr-4">our phone numbers</span> 
           <span className="underline text-[20px] mr-4">+254 720 769 235 </span> or +254720 273 450</p>
          <p className="font-montserrat text-[20px]"> <span className="font-bold mr-4">Email</span> <span className="underline">kuriagirlchildcenter@gmail.com</span></p>
          <p className="font-montserrat mr-8 text-[20px]"><span className="font-bold mr-8">Address</span> <span>P.o Box 198=40413 kehancha</span></p>
        </div>
      ))}
    </div>
  );
};

export default Contact;

