import Heading from "@/components/Heading";
import Bikes from "@/components/Bikes/Bikes";

export default function SearchBikes() {
  return (
    <section className="lg:mx-5 flex flex-col gap-10">
      <Heading title="Search for all Bikes" />
      <Bikes />
    </section>
  );
}
