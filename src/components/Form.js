import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getAnItem } from '../functionalities';
import Item from './Item';
import { submitForm } from '../functionalities';
import '../styles/formstyle.css'

export default function Form() {
    const { item_id } = useParams();
    const [item, setItem] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null)

    async function getItem(item_id) {
        setItem(await getAnItem(item_id));
        // console.log(item);
    }
    useEffect(() => {
        getItem(item_id);
    }, [item_id])

    const [formData, setFormData] = useState({
        quantity: 0,
        name: '',
        phone: '',
        address: '',
        txid: '',
        promoCode: '',
        item_id: item_id
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        phoneError: '',
        addressError: '',
        txidError: '',
        promoCodeError: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (submitForm(formRef,item_id,item.stock-formData.quantity))
                setSubmitted(true);
            else alert("Something went wrong")
            // Submit the form data to the backend
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const validateForm = () => {
        let isValid = true;
        const errors = {
            quantityError: '',
            nameError: '',
            phoneError: '',
            addressError: '',
            txidError: '',
            promoCodeError: ''
        };

        if (formData.quantity < 1) {
            errors.quantityError = 'Quantity: At least 1';
            // if(formData.quantity>item.stock)
            // errors.quantityError = `Only ${item.stock} items left`;
            isValid = false;
            document.querySelector('#quantity').classList.add('is-invalid');
        } else {
            document.querySelector('#quantity').classList.remove('is-invalid')
        }

        if(formData.quantity>item.stock){
            errors.quantityError = `Only ${item.stock} items left`;
            isValid = false;
            document.querySelector('#quantity').classList.add('is-invalid');
        } else {
            document.querySelector('#quantity').classList.remove('is-invalid')
        }

        if (formData.name.trim().length < 3) {
            errors.nameError = 'Name should be at least 3 characters long';
            isValid = false;
            document.querySelector('#name').classList.add('is-invalid');
        } else {
            document.querySelector('#name').classList.remove('is-invalid');
        }

        if (formData.phone === '') {
            errors.phoneError = 'Please enter a valid phone number';
            isValid = false;
            document.querySelector('#phone').classList.add('is-invalid');
        } else {
            document.querySelector('#phone').classList.remove('is-invalid');
        }

        if (formData.address.trim().length < 1) {
            errors.addressError = 'Please enter the exact delivery address';
            isValid = false;
            document.querySelector('#address').classList.add('is-invalid');
        } else {
            document.querySelector('#address').classList.remove('is-invalid');
        }

        if (formData.txid === '') {
            errors.txidError = 'Please enter the Transaction ID';
            isValid = false;
            document.querySelector('#txid').classList.add('is-invalid');
        } else {
            document.querySelector('#txid').classList.remove('is-invalid');
        }

        setFormErrors(errors);
        return isValid;
    }

    return (
        <div className='orderform'>
            {/* <h1>Order Form</h1> */}
            {/* <div style={{border:"1px solid black", margin:"auto"}}> */}
            {item && <Item item={item} />}
            {/* </div> */}
            <div style={{ width: "max-content" }}>
                <p className='text-muted' style={{ marginTop: "-2%", padding: "10px" }}>
                Please pay the booking fee <strong>100Tk</strong> via Bkash or Rocket.<br />Save the Transaction ID and put that into the respective field.
                    <br /><b>Bkash:</b> 01xxxxxxxxxx --- <b>Rocket:</b> 01xxxxxxxxxx</p>
                <div>
                    <div className="container justify-content-center">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className='container'>
                                <div className="form-row  mb-4">
                                    {/* <label htmlFor="item_id">Item ID:</label> */}
                                    <input type="hidden" className="form-control" id="item_id" name="item_id" value={formData.item_id} onChange={handleInputChange} />
                                    {/* {formErrors.promoCodeError && <span class="invalid-feedback">{formErrors.promoCodeError}</span>} */}
                                </div>
                                <div className="form-row mb-4">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                                    {formErrors.quantityError && <span className="invalid-feedback">{formErrors.quantityError}</span>}
                                </div>
                                <div className="form-row mb-4">
                                    <label htmlFor="name">Your Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                                    {formErrors.nameError && <span className="invalid-feedback">{formErrors.nameError}</span>}
                                </div>
                                <div className="form-row  mb-4">
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                                    {formErrors.phoneError && <span className="invalid-feedback">{formErrors.phoneError}</span>}
                                </div>
                                <div className="form-row  mb-4">
                                    <label htmlFor="address">Delivery Address:</label>
                                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                                    {formErrors.addressError && <span className="invalid-feedback">{formErrors.addressError}</span>}
                                </div>
                                <div className="form-row  mb-4">
                                    <label htmlFor="txid">Transaction ID:</label>
                                    <input type="text" className="form-control" id="txid" name="txid" value={formData.txid} onChange={handleInputChange} />
                                    {formErrors.txidError && <span className="invalid-feedback">{formErrors.txidError}</span>}
                                </div>
                                <div className="form-row  mb-4">
                                    <label htmlFor="promoCode">Promo Code:</label>
                                    <input type="text" className="form-control" id="promoCode" name="promoCode" value={formData.promoCode} onChange={handleInputChange} />
                                    {/* {formErrors.promoCodeError && <span class="invalid-feedback">{formErrors.promoCodeError}</span>} */}
                                </div>
                                {!submitted && <div className="form-group text-center">
                                    <button className="buybtn" onClick={handleSubmit}>Submit</button>
                                </div>}
                                {submitted && <p style={{ color: "green" }}>Your order has been placed. Go back to continue browsing.</p>}
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{height:"10vh"}}></div>
            </div>
            {/* <div style={{height:"10vh"}}></div>
            <small>UNIBOND</small>
            <div style={{height:"5vh"}}></div> */}
        </div>
    );
}