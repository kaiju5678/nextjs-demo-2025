import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-3 h-[124px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white rounded-2xl shadow-lg">
      <AiOutlineProduct fontSize="40px" />
      <span className="text-4xl font-bold text-center">กินเข่ากันพี่น้อง แซ่บๆ</span>
    </div>
  );
}
