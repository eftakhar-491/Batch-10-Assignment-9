import { Helmet } from "react-helmet";
import bga from "../../assets/bgimg.jpg";
import coo from "../../assets/coo.jpg";

const people = [
  {
    name: "Leslie Alexander",
    role: "Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Alexander Ruti",
    role: "Co-Founder / COO",
    imageUrl: coo,
  },
];

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Word_By | About</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div
        className="bg-cover bg-center py-10 mb-12"
        style={{ backgroundImage: `url(${bga})` }}
      >
        <h1
          data-aos="fade-up"
          className="text-2xl font-bold text-center lg:text-3xl "
        >
          About Us
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm mt-2 font-semibold text-center"
        >
          Show some thing about us, what can motivate you
        </p>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
