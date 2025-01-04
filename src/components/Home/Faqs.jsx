import bg from "../../assets/bgimg.jpg";
export default function Faqs() {
  const vocabularyList = [
    {
      title: "Word of the Day",
      description:
        "Learn a new word every day to continuously build and diversify your vocabulary.",
    },

    {
      title: "Spelling Practice",
      description:
        "Improve your spelling through interactive exercises and challenges designed to reinforce correct word usage.",
    },

    {
      title: "Contextual Examples",
      description:
        "See how words are used in various sentences and contexts to grasp their meaning and usage more fully.",
    },
    {
      title: "Pronunciation Guide",
      description:
        "Listen to and practice the correct pronunciation of words to ensure clear and effective communication.",
    },
  ];

  return (
    <>
      <section>
        <div
          className="bg-cover bg-center py-10 mb-12"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1
            data-aos="fade-up"
            className="text-2xl font-bold text-center lg:text-3xl "
          >
            FAQ's{" "}
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm mt-2 font-semibold text-center"
          >
            User's Common Qustion And Answer
          </p>
        </div>
        <div className="w-11/12 mx-auto lg:w-4/5 flex flex-col gap-2">
          {vocabularyList?.map((item, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="bg-blue-50 collapse collapse-arrow "
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
