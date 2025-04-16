import { Ticket } from "@/type/ticket";
import RealtimeClock from "../realtimeClock";
import GeneralUtil from "@/util/generalUtil";
import { useRouter } from "next/navigation";

type CheckInResultProps = {
    ticket: Ticket;
    onBack: () => void;
    onStart: (plateNumber: string) => void;
    success: string | null;
};
  
export default function CheckInResult({ ticket, onBack, onStart, success }: CheckInResultProps) {
  const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="min-w-72 bg-gray-200 px-4 py-4">
                <p className="text-sm uppercase font-black border-b-2 border-b-gray-900 text-gray-900 pb-1">Details</p>
                <div className="text-base py-4 px-4">
                    <div className="flex justify-between">
                        <p>Plate Number</p>
                        <p className="italic uppercase">{ticket.plateNumber}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Price*</p>
                        <p className="italic">Rp {ticket.price}</p>
                    </div>
                    {success === null ?
                        (<div className="flex justify-between">
                            <p>Current Time</p>
                            <RealtimeClock />
                        </div>) :
                        (<div className="flex justify-between">
                            <p>Check-in Time</p>
                            <p className="italic">{GeneralUtil.formatTimeFromString(ticket.updatedAt)}</p>
                        </div>)
                    }
                </div>
                <p className="text-sm italic">*Price recalculated per hours (Rp 3.000 / hr)</p>
            </div>
            <div className="flex gap-4">
                {success === null &&
                    <button
                        onClick={() => onStart(ticket.plateNumber)}
                        className="bg-green-600 text-gray-50 uppercase font-semibold min-w-32 px-4 py-2 rounded-xl cursor-pointer"
                    >
                        <p className="font-semibold uppercase text-sm text-white">Start</p>
                    </button>
                }
                <button 
                    className="bg-gray-900 min-w-32 px-4 py-2 rounded-xl cursor-pointer"
                    onClick={() => success === null ? onBack : router.push('/')}
                >
                    <p className="font-semibold uppercase text-sm text-white">Back</p>
                </button>
            </div>
        </div>
    );
}
  