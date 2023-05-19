import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-slate-50 rounded-lg w-11/12 text-center mt-[40px] p-4 text-3xl font-bold uppercase">
        Random GIFS
      </h1>
      <Random />
      <Tag />
    </div>
  );
}
