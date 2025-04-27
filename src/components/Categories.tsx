
import { Link } from "react-router-dom";

const categories = [
  {
    id: "1",
    name: "Мужские часы",
    imageUrl: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000",
    link: "/",
  },
  {
    id: "2",
    name: "Женские часы",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901366?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000",
    link: "/",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Категории</h2>
          <div className="h-0.5 w-20 bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="relative block group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
                  <div className="bg-white py-4 px-8">
                    <h3 className="text-xl font-medium">{category.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
