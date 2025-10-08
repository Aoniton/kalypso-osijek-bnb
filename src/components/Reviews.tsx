import review1 from "@/assets/reviews/review-1.png";
import review2 from "@/assets/reviews/review-2.png";
import review3 from "@/assets/reviews/review-3.png";
import review4 from "@/assets/reviews/review-4.png";
import review5 from "@/assets/reviews/review-5.png";
import review6 from "@/assets/reviews/review-6.png";
import review7 from "@/assets/reviews/review-7.png";
import review8 from "@/assets/reviews/review-8.png";
import review9 from "@/assets/reviews/review-9.png";
import review10 from "@/assets/reviews/review-10.png";

interface ReviewsProps {
  language: "en" | "hr";
}

const Reviews = ({ language }: ReviewsProps) => {
  const content = {
    en: {
      title: "What our clients say about us?",
    },
    hr: {
      title: "Što naši gosti kažu o nama?",
    },
  };

  const reviews = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={review}
                alt={`Client review ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
