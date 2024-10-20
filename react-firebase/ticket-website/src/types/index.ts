export interface UserLogIn {
    email: string;
    password: string;
}

export interface UserRegister {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    country: string;
    state: string;
    zip: string;
    paymentMethod: string;
    product: string | undefined;
    price: number | undefined;
    totalTickets: number;
    totalPrice: number | undefined;
    dateTime: string;
}