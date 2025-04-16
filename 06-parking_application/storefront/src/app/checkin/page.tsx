'use client';

import { useState } from 'react';
import TicketService from '@/service/ticketService';
import { Ticket } from '@/type/ticket';
import CheckInResult from '@/component/checkin/checkInResult';
import CustomAlert from '@/component/customAlert';
import CustomForm from '@/component/customForm';

export default function CheckInPage() {
  const [view, setView] = useState<"form" | "result">("form");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [ticket, setTicket] = useState<Ticket>();

  const handleCheck = async (plateNumber: string) => {
    try {
      if (plateNumber) {
        const result = await TicketService.fetchTicketByPlate(plateNumber);
        if (result.status == "new") {
          setTicket(result.data);
          setError(null);
          setView("result");
        } else {
          throw new Error('Vehicle already registered');
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
      const result = await TicketService.checkIn(plateNumber);
      setTicket(result.data);
      setSuccess("Success Create a Ticket");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Failed to check-in');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4 bg-rose-600">
      <h3 className="font-black text-xl uppercase text-center text-gray-200">Vehicle Check-In</h3>
      {view === "form" && 
        <CustomForm 
          onCheck={handleCheck}
        />
      }
      {view === "result" && ticket && 
        <CheckInResult
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
