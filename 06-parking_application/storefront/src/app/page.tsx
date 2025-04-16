'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4 bg-rose-600">
      <h3 className="font-black text-xl uppercase text-center text-gray-200">Choose Your Menu</h3>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <button 
          className="bg-gray-200 min-w-32 px-4 py-2 rounded-xl cursor-pointer"
          onClick={() => router.push('/checkin')}
        >
          <p className="font-semibold uppercase text-sm">Check In</p>
        </button>
        <button 
          className="bg-gray-200 min-w-32 px-4 py-2 rounded-xl cursor-pointer"
          onClick={() => router.push('/checkout')}
        >
          <p className="font-semibold uppercase text-sm">Check Out</p>
        </button>
      </div>
    </div>
  );
}
