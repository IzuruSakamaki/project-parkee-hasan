import { Ticket } from "./ticket";

export interface TicketResponse {
    status: string;
    data: Ticket;
}