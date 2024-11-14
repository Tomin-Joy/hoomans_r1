import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationProps {
  isStart: boolean;
  isEnd: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export default function Navigation({
    isStart,
    isEnd,
  onPrevClick,
  onNextClick,
}: NavigationProps) {
  return (
    <div className=" md:flex gap-2">
      <button
        onClick={onPrevClick}
        className={`p-4 rounded-full border ${isStart?"border-gray-200 text-gray-200":"border-black hover:bg-gray-50"}  transition-colors`}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNextClick}
        className={`p-4 rounded-full border ${isEnd?"border-gray-200 text-gray-200":"border-black hover:bg-gray-50"}  transition-colors`}
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
}
