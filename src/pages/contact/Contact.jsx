import DynamicText from "@/components/texts/DynamicText";


const Contact = () => {
  const contactData = [
    {
      title: "Our Contact Information",
      description: "We'd love to hear from you! Whether you have questions about our programs, need more information on how to sponsor a child, or want to get involved, please don't hesitate to reach out. Your support and interest are crucial in helping us make a lasting impact."
    }
  ];

  return (
    <>
    <div className="px-2 py-10 md:px-10  md:py-12 lg:px-20 lg:py-10">
      {contactData.map((contact, index) => (
        <div className="border-2 shadow-sm  rounded-md bg-purple-100 p-6" key={index}>
          <DynamicText as="h1" className="text-xl  md:text-2xl lg:text-4xl font-bold pb-4">{contact.title}</DynamicText>
          <DynamicText className=" text-left ">{contact.description}</DynamicText>

          <DynamicText className="text-left py-2">
            <span className="font-bold mr-2 lg:mr-4">Our Phone Numbers:</span>
            <span className="underline  ">+254 720 769 235</span> / 
            <span className="underline ml-"> +254 720 273 450</span>
          </DynamicText>

          <DynamicText className="text-left py-2">
            <span className="font-bold mr-4">Email:</span>
            <span className="underline">kuriagirlchildcenter@gmail.com</span>
          </DynamicText>

          <DynamicText className="text-left py-2">
            <span className="font-bold mr-4">Address:</span>
            <span>P.O. Box 198-40413 Kehancha</span>
          </DynamicText>
        </div>
      ))}
    </div>


    </>
  );
};

export default Contact;
