import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomForm({ onCheck }: { onCheck: (plateNumber: string) => void }) {
    const router = useRouter();
    const [plateNumber, setPlateNumber] = useState<string>('');
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <input
                type="text"
                value={plateNumber}
                onChange={(e) => {
                        const input = e.target.value.toUpperCase();
                        if (input.length <= 9) {
                          setPlateNumber(input);
                        }
                    }
                }
                placeholder="Enter Plate Number"
                className="px-4 py-2 rounded-xl mb-2 bg-gray-200 min-w-72 h-16 text-center font-black uppercase"
            />
            <div className="flex gap-4">
                <button
                    onClick={() => onCheck(plateNumber)}
                    className="bg-blue-600 text-gray-50 uppercase font-semibold min-w-32 px-4 py-2 rounded-xl cursor-pointer"
                >
                    <p className="font-semibold uppercase text-sm text-white">Scan</p>
                </button>
                <button 
                    className="bg-gray-900 min-w-32 px-4 py-2 rounded-xl cursor-pointer"
                    onClick={() => router.push('/')}
                >
                    <p className="font-semibold uppercase text-sm text-white">Back</p>
                </button>
            </div>
        </div>
    );
}
