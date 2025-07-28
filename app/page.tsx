import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 p-6">
      {/* 1 */}
      <GridOption
        title="Sweet gifts for less"
        image="https://links.papareact.com/1dy"
        className="bg-pink-200 h-full md:h-32"
      />

      {/* 2 */}
      <GridOption
        title="Shob Wardrobe"
        image="https://links.papareact.com/8ko"
        className="bg-blue-100 cols-span-2 row-span-2"
      />

      {/* 3 */}
      <GridOption
        title="Shop Home"
        image="https://links.papareact.com/szu"
        className="bg-pink-200 row-span-2"
      />

      {/* 4 */}
      <GridOption
        title="Shop Electronics"
        image="https://links.papareact.com/n7r"
        className="bg-yellow-100 h-64"
      />

      {/* 5 */}
      <GridOption
        title="Shop Toys"
        image="https://links.papareact.com/pj2"
        className="bg-green-100 h-64 col-span-2"
      />

      {/* 6 */}
      <GridOption
        title="All you need for Match Day"
        image="https://links.papareact.com/m8e"
        className="bg-yellow-100 row-span-2 col-span-2"
      />
      {/* 7 */}
      <GridOption
        title="Shop Gadgets"
        image="https://links.papareact.com/gs1"
        className="bg-orange-100 h-64"
      />

      {/* 8 */}
      <GridOption
        title="Shop Beauty"
        image="https://links.papareact.com/4y0"
        className="bg-blue-100 h-64"
      />

      {/* 9 */}
      <GridOption
        title="Shop Sports"
        image="https://links.papareact.com/sq2"
        className="bg-blue-100 h-64"
      />

      {/* 10 */}
      <GridOption
        title="Enjoy Free Shipping"
        image="https://links.papareact.com/9fh"
        className="bg-rose-100 h-64"
      />

      {/* 11 */}
      <GridOption
        title="Flash Deals"
        image="https://links.papareact.com/qx7"
        className="bg-orange-200 h-64 col-span-2"
      />
    </main >
  );
}
