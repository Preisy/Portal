import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export interface CalculatorDto {
    ceilArea: number;
    cornersCount: number;
    lightersCount: number;
    phonenumber: string;
}

export async function sendData(data: CalculatorDto) {
    const response = await api.post('/whatsapp', data);
    console.log(response);
}
