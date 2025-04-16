'use client';

import { useState } from 'react';
import TicketService from '@/service/ticketService';
import { Ticket } from '@/type/ticket';
import CustomAlert from '@/component/customAlert';
import CustomForm from '@/component/customForm';
import CheckOutResult from '@/component/checkout/checkOutResult';

export default function CheckOutPage() {
  const [view, setView] = useState<"form" | "result">("form");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [ticket, setTicket] = useState<Ticket>();

  const handleCheck = async (plateNumber: string) => {
    try {
      if (plateNumber) {
        const result = await TicketService.fetchTicketByPlate(plateNumber);
        if (result.status == "registered") {
          setTicket(result.data);
          setError(null);
          setView("result");
        } else {
          throw new Error('Vehicle not found');
        }
      } else {
        throw new Error('Plate number is empty');
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Failed to scan');
      }
    }
  };
  const handleBack = () => {
    setError(null);
    setSuccess(null);
    setView("form");
  }
  const handleStart = async (plateNumber: string) => {
    try {
      const result = await TicketService.checkOut(plateNumber);
      setTicket(result.data);
      setSuccess("Success Checked Out");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Failed to check-out');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4 bg-rose-600">
      <h3 className="font-black text-xl uppercase text-center text-gray-200">Vehicle Check-Out</h3>
      {view === "form" && 
        <CustomForm 
          onCheck={handleCheck}
        />
      }
      {view === "result" && ticket && 
        <CheckOutResult
          ticket={ticket}
          onBack={handleBack}
          onStart={handleStart}
          success={success}
        />
      }
      {success && <CustomAlert type={'success'} message={success} />}
      {error && <CustomAlert type={'error'} message={error} />}
    </div>
  );
}
