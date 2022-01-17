import { 
    render, 
    fireEvent, 
    screen 
} from '@testing-library/react'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomerInvoices from '../src/widgets/CustomerInvoices';

describe("CustomerInvoices component",()=>{
    it("should render customers's invoices given in props", async () => {

        const invoices = [
            { id: 1, amount: '1200', status: "SENT",customer_id:1 },
            { id: 2, amount: '1000', status: "PAID",customer_id:1 }
        ];

        render(<BrowserRouter>
             <CustomerInvoices invoices={invoices}></CustomerInvoices>
        </BrowserRouter>);

        const items = await screen.getAllByText("1200 €", { exact: false });
        
        expect(items).toHaveLength(1);
    })

    it("should translate SENT in Envoyée and PAID in Payée",async()=>{
        const invoices = [
            { id: 1, amount: '1200', status: "SENT",customer_id:1 },
            { id: 2, amount: '1000', status: "PAID",customer_id:1 }
        ];

        render(<BrowserRouter>
             <CustomerInvoices invoices={invoices}></CustomerInvoices>
        </BrowserRouter>);

        const sent = await screen.getAllByText("Envoyée", { exact: false });
        const paid = await screen.getAllByText("Payée", { exact: false });
        expect(sent).toHaveLength(1);
        expect(paid).toHaveLength(1);
    })
    

})