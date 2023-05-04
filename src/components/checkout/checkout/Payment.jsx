import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from 'react'
import airtel from '../../../assets/logos/airtel.png'
import mtn from '../../../assets/logos/mtn.png'
import visaImg from '../../../assets/logos/visa.png'
import Order from './Order'
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../../../app/CartSlice";
import axios from "axios"
import { paymentPost } from "../../../actions/PaymentAction";



const Payment = ({ shippingAddress, setShippingAdress, setActiveStep, activeStep }) => {
  const dispatch = useDispatch()
  const paymentSuccess = useSelector((state) => state.paymentReducer.paymentSuccess)
  console.log("SUCCESS", paymentSuccess)
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const [visa, setVisa] = useState(false)
  const [airtelForm, setAirtelForm] = useState(false)
  const [mtnForm, setMtnForm] = useState(false)
  const [currentState, setCurrentState] = useState("")

  const [mtnNum, setMtnNum] = useState({ mtnNumber: "" })
  const [airtelNum, setAirtelNum] = useState({ airtelNumber: "" })
  const [visaObj, setVisaObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
  })

  const [paymentObj, setPaymentObj] = useState()
  const URL = "http://localhost:8000/api/orders/"

  const handleClick = (state) => {
    state === "visa" ? setVisa(true) : setVisa(false)
    state === "airtel" ? setAirtelForm(true) : setAirtelForm(false)
    state === "mtn" ? setMtnForm(true) : setMtnForm(false)

    paymentObject(state)
    setCurrentState(state)
  }

  const paymentObject = (state) => {
    if (state === "visa") {
      setPaymentObj(visaObj)
    }

    if (state === "airtel") {
      setPaymentObj(airtelNum)
    }

    if (state === "mtn") {
      setPaymentObj(mtnNum)
    }

  }

  const makePayment = async (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1)
    console.log("ActiveState", activeStep)

    const paths = ["visa", "mtn", "airtel"]

    const requestBody = {
      userName: [shippingAddress.firstname, shippingAddress.lastname].join(" "),
      email: shippingAddress.email,
      products: cartItems.map(({ _id, cartQuantity }) => ({
        _id,
        cartQuantity,
      })),
      amount: totalAmount,
      address: shippingAddress.address,
      paymentMethod: paymentObj
    };
    console.log("REQUEST", requestBody)

    console.log("CurrentState", currentState)

    dispatch(paymentPost(currentState, requestBody))

    const response = await axios(
      {
        method: "POST",
        url: `${URL}${currentState}`,
        data: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" },
      });

    const session = await response.json();
    console.log(session.data)

  }



  return (
    <>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="-mx-3 flex flex-row md:flex-col-reverse items-start">

          <div className="px-3 w-full">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
              <div className="w-full flex md:flex-row mb-3 justify-start items-center">
                <div className="w-32 mr-5">
                  <span className="text-gray-600 font-semibold">Contact</span>
                </div>
                <div className="flex-grow">
                  <span>{`${shippingAddress.firstname} ${shippingAddress.lastname}`}</span>
                </div>
              </div>
              <div className="w-full flex md:flex-row justify-start items-center">
                <div className="w-32 mr-5">
                  <span className="text-gray-600 font-semibold">Address</span>
                </div>
                <div className="flex-grow">
                  <span>{`${shippingAddress.address}`}</span>
                </div>
              </div>
            </div>
            <h6 className="font-semibold text-gray-600 mb-2">Choose payment method</h6>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
              <div className="w-full p-3 border-b border-gray-200">
                <div className='flex flex-row items-center justify-between w-[90%]'>
                  <div className="mb-5">
                    <label for="visa" className="flex items-center cursor-pointer md:flex-col md:flex-col-reverse">
                      <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="paymentMethod" id="visa" onClick={() => handleClick("visa")} />
                      <img src={visaImg} className="h-8 w-10 ml-3" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label for="airtel" className="flex items-center cursor-pointer md:flex-col md:flex-col-reverse">
                      <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="paymentMethod" id="airtel" onClick={() => handleClick("airtel")} />
                      <img src={airtel} className="h-8 w-10 object-contain ml-3" />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label for="mtn" className="flex items-center cursor-pointer md:flex-col md:flex-col-reverse">
                      <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="paymentMethod" id="mtn" onClick={() => handleClick("mtn")} />
                      <img src={mtn} className="h-8 w-10 object-contain ml-3" />
                    </label>
                  </div>
                </div>
                <div className='w-full'>
                  {visa ? (
                    <VisaForm />
                  ) : null}
                  {airtelForm ? (
                    <>
                      <div className="px-2 w-1/4">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Enter airtel mobile</label>
                        <div>
                          <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="077 0r 097" type="text" onChange={(e) => setAirtelNum({ airtelNumber: e.target.value })} />
                        </div>
                      </div>
                    </>) : null}
                  {mtnForm ? (
                    <>
                      <div className="px-2 w-1/4 pt-10">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Enter MTN mobile</label>
                        <div>
                          <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="076 or 096" type="text" onChange={(e) => setMtnNum({ ...mtnNum, mtnNumber: e.target.value })} />
                        </div>
                      </div>
                    </>) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 w-7/12 md:w-full lg:pr-10">
            <Order />
          </div>
        </div>
        <div className='flex items-center justify-between md:gap-4 md:px-4 px-10 w-full'>
          <button className='w-[40%] py-[4px] md:px-[2px] rounded-[15px] border-none text-[10px] mt-[10px] mr-10 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' onClick={() => setActiveStep(activeStep - 1)}>
            Back
          </button>
          <button type='submit' className='w-[40%] py-[4px] md:px-[2px] rounded-[15px] border-none text-[10px] mt-[10px] uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out ' onClick={(e) => makePayment(e)}>
            Pay Now
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="text-center text-gray-400 text-sm">
          <a href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="focus:outline-none underline text-gray-400"><i className="mdi mdi-beer-outline"></i>Powered by</a> ActsCloud
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
          </a>
        </div>
      </div>
    </>
  );
};

const VisaForm = () => {
  return (
    <>
      <div>
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
          </div>
        </div>

        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/4">
            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/4">
            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
          <div className="px-2 w-1/4">
            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Payment;
