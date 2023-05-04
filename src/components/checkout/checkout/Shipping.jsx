import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../../../style";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Shipping = ({ shippingAddress, setShippingAdress, setActiveStep, activeStep }) => {
  const [cityState, setCityState] = useState(shippingAddress?.country)
  console.log("STATE", shippingAddress)

  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
          <h5 className="text-[18px] font-[500]">Shipping Address</h5>
          <br />
          <div className="w-full flex md:flex-col pb-3">
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">First Name</label>
              <input type="text" required className={`${styles.input} !w-[95%]`} value={shippingAddress?.firstname} onChange={(e) => setShippingAdress({ ...shippingAddress, firstname: e.target.value })} />
            </div>
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Last Name</label>
              <input type="text" required className={`${styles.input} !w-[95%]`} value={shippingAddress?.lastname} onChange={(e) => setShippingAdress({ ...shippingAddress, lastname: e.target.value })} />
            </div>
          </div>

          <div className="w-full flex md:flex-col pb-3">
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Phone Number</label>
              <input
                type="number"
                required
                className={`${styles.input} !w-[95%]`}
                value={shippingAddress?.phoneNumber}
                onChange={(e) => setShippingAdress({ ...shippingAddress, phoneNumber: e.target.value })}
              />
            </div>
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Email Address</label>
              <input type="email" required className={`${styles.input}`} value={shippingAddress?.email} onChange={(e) => setShippingAdress({ ...shippingAddress, email: e.target.value })} />
            </div>
          </div>

          <div className="w-full flex md:flex-col pb-3">
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Country</label>
              <select
                className="w-[95%] border h-[40px] rounded-[5px]"
                value={shippingAddress?.country}
                onChange={(e) => setShippingAdress({ ...shippingAddress, country: e.target.value })}
              >
                <option className="block pb-2" value="">
                  Choose your country
                </option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Country</label>
              <select className="w-[95%] border h-[40px] rounded-[5px]" onChange={(e) => setShippingAdress({ ...shippingAddress, city: e.target.value })}>
                <option className="block pb-2" value={shippingAddress?.city} >
                  Choose your City
                </option>
                {State &&
                  State.getStatesOfCountry(shippingAddress?.country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="w-full flex md:flex-col pb-3">
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Address</label>
              <input
                type="address"
                required
                className={`${styles.input} !w-[95%]`}
                value={shippingAddress?.address}
                onChange={(e) => setShippingAdress({ ...shippingAddress, address: e.target.value })}
              />
            </div>
            <div className="w-[50%] md:w-full">
              <label className="block pb-2">Zip Code</label>
              <input type="number" required className={`${styles.input}`} value={shippingAddress?.zipCode} onChange={(e) => setShippingAdress({ ...shippingAddress, zipCode: e.target.value })} />
            </div>
          </div>
          <div className='w-full mt-10 flex items-center justify-center px-10'>
            <button type="submit" className='w-[90%] py-[4px] md:px-[2px] rounded-[15px] border-none text-[10px] mt-[10px] mr-10 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' onClick={() => setActiveStep(activeStep + 1)}>
              Next
            </button>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Shipping;
