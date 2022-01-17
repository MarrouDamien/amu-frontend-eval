import { 
    render, 
    fireEvent, 
    screen 
} from '@testing-library/react'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomerList from '../src/widgets/CustomerList';

describe("CustomerList component",()=>{
    it("should render customers given in props", async () => {

        const customers = [
            { id: 1, fullName: 'Cust_1', email: "cust1@mail.com" },
            { id: 2, fullName: 'Cust_2', email: "cust2@mail.com" },
        ];

        render(<BrowserRouter>
             <CustomerList customers={customers}></CustomerList>
        </BrowserRouter>);

        const items = await screen.getAllByText("Cust_", { exact: false });

        expect(items).toHaveLength(customers.length);
    })
})