import { TicketResponse } from "@/type/ticketResponse";

const TicketService = {
  async fetchTicketByPlate (plateNumber: string): Promise<TicketResponse> {
    const response = await fetch(`http://localhost:8080/transactions?plateNumber=${plateNumber}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to find ticket');
    }
    return await response.json();
  },
  
  async checkIn (plateNumber: string): Promise<TicketResponse> {
    const response = await fetch('http://localhost:8080/transactions/check-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plateNumber }),
    });
    if (response.status !== 201) {
      throw new Error('Failed to start parking');
    }
    return await response.json();
  },

  async checkOut (plateNumber: string): Promise<TicketResponse> {
    const response = await fetch('http://localhost:8080/transactions/check-out', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plateNumber }),
    });
    if (!response.ok) {
      throw new Error('Failed to stop parking');
    }
    return await response.json();
  },
};

export default TicketService;
