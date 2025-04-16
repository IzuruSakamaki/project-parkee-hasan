export interface Ticket {
    id: number;
    plateNumber: string;
    price: number | null;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean | null;
}