import axios from "axios";

const api = axios.create({ baseURL: "/api"});

export interface CalculatorDto {
    ceilArea: number;
    cornersCount: number;
    lightersCount: number;
    phonenumber: string;
}

export async function sendData(data: CalculatorDto) {
    return await api.post('/mail', data);
}
