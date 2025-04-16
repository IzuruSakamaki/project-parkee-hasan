import { OctagonAlert, SquareCheckBig } from "lucide-react";

type CustomAlertProps = {
    type: string;
    message: string;
};
  
export default function CustomAlert({ type, message }: CustomAlertProps) {
    return (
        <div className='flex gap-2 items-center justify-center'>      
            {type === "error" && <OctagonAlert color='#f9fafb' className='w-5 h-5' />} 
            {type === "success" && <SquareCheckBig color='#f9fafb' className='w-5 h-5' />} 
            <p className="text-sm text-gray-50">{message}</p> 
        </div>
    );
}
  