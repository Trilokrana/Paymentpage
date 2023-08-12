import React, { useState } from "react";
import "./App.css";



export const Paymentpage = () => {

  const plans = [
    { id: 1, name: '1 Months Subscription', price: 999, discount: 50, permonth: '499' },
    { id: 2, name: '12 Months Subscription', price: 11999, discount: 60, permonth: '399' },
    { id: 3, name: '6 Months Subscription', price: 5999, discount: 30, permonth: '349' },
    { id: 4, name: '3 Months Subscription', price: 6999, discount: 15, permonth: '299' },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setTotalPrice(Math.floor(plan.price * (1 - plan.discount / 100)));
  };
  return (

    <div className="content-container">
      <div className="navbarEyo">
        <navbar className='Eyoda'>EDYODA
          <div className="label">
            <div className="Next">Courses</div>
            <div className="Next">Programs</div>
            <button className="button1">Log in</button>
            <button className="button2">JOIN NOW</button>
          </div>
        </navbar>
      </div>
      <div className="overlap">
        <div className="form">
          <div className="progress-bar">
            <div className="stage">
              <label className="icon">
                <input className='fill' type="radio" name="action" value="sign up" /> Sign Up
              </label>
            </div>
            <div className="stage">
              <label>
                <input className="fill" type="radio" name="action" value="sign in" /> Subscribe
              </label>
            </div>
          </div>
          <div className="form-header">
            <div className="div">Select your subcription plan</div>
          </div>
          <div className="input-container">
            <div className="payments-container">
              <div className="plan-options">
                {plans.map((plan) => (
                  <label key={plan.id} className={`plan-option ${plan.id === selectedPlan.id ? 'selected' : ''}`}>
                    <input
                      className="sigma"
                      type="radio"
                      name="subscription-plan"
                      value={plan.id}
                      notchecked={plan.id === selectedPlan.id}
                      onChange={() => handlePlanChange(plan)}
                    />
                    <span className="months">{plan.name}</span>
                    <span className="price">Price {plan.price}</span>
                    <div>
                      <div className="same">₹{plan.permonth}
                        <span>/month</span>
                      </div>
                    </div>
                    <div className="tag">
                      <div className="text-wrapper-2">50% OFF ( Student Discount ) </div>
                    </div>
                    <div className="tag1">
                      <div className="text-wrapper-2">60% OFF ( Recommended ) </div>
                    </div>
                    <div className="tag2">
                      <div className="text-wrapper-2">30% OFF (Student Discount) </div>
                    </div>
                    <div className="tag3">
                      <div className="text-wrapper-2">15% OFF (Student Discount) </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="input-container">
          </div>
          <div className="summary-container">
            <div className="div-4">
              <div className="div-5">Subscription Fee</div>
              <div className="text-11">₹18,500</div>
            </div>
            <div className="alert">
              <div className="div-4">
                <div className="text-12">Limited time offer</div>
                <div className="text-13">- ₹18,500</div>
              </div>
              <div className="alert-body">
                <img
                  className="icon-clock"
                  alt="Icon clock"
                  src="https://generation-sessions.s3.amazonaws.com/1c958365b1db78901b6b1fae479dfb06/img/icon-clock.svg"
                />
                <p className="p">Offer valid till 15th Aug 2023</p>
              </div>
            </div>
            <div className="div-4">
              <p className="div-5">
                <span className="span">Total Price: </span>
                <span className="text-wrapper-4"></span>
                <div className="total-price">
                </div>
              </p>
              <div className="right-text">₹{totalPrice}</div>
            </div>
          </div>
          <div className="button-container">
            <div className="secondary-button">
              <div className="text-14">CANCEL</div>
            </div>
            <div className="primary-button">
              <div className="text-15">PROCEED TO PAY</div>
            </div>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon" />
          </div>
        </div>

        <div className="main-lockup">
          <header className="header">
            <div className="frame">
              <div className="text-wrapper-5">Access curated courses worth</div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-6">₹ 18,500</div>
              <div className="rectangle" />
              <div className="frame-3">
                <div className="text-wrapper-7">at just</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-8">₹ 399</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-7">/Months!</div>
              </div>
            </div>
          </header>
          <div className="pointer">
            <img
              className="img"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/1c958365b1db78901b6b1fae479dfb06/img/icon-2.svg"
            />
            <div className="div-wrapper-2">
              <p className="div-6">
                <span className="text-wrapper-9">100+ </span>
                <span className="text-wrapper-10">Job relevant courses</span>
                <span className="text-wrapper-11">&nbsp;</span>
              </p>
            </div>
          </div>
          <div className="pointer">
            <img
              className="img"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/1c958365b1db78901b6b1fae479dfb06/img/icon-1.svg"
            />
            <div className="div-wrapper-2">
              <p className="div-6">
                <span className="text-wrapper-9">20,000+ </span>
                <span className="text-wrapper-10">Hours of content</span>
              </p>
            </div>
          </div>
          <div className="pointer">
            <div className="group-wrapper">
              <div className="group">
                <div className="overlap-group">
                  <div className="text-wrapper-12">live</div>
                </div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <p className="div-6">
                <span className="text-wrapper-9">Exclusive </span>
                <span className="text-wrapper-10">webinar access</span>
              </p>
            </div>
          </div>
          <div className="pointer">
            <img
              className="img"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/1c958365b1db78901b6b1fae479dfb06/img/icon.svg"
            />
            <div className="text-container-2">
              <div className="div-wrapper-2">
                <p className="div-6">
                  <span className="text-wrapper-10">Scholarship worth </span>
                  <span className="text-wrapper-9">₹94,500</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pointer">
            <div className="icon-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-13">ADS</div>
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <p className="div-6">
                <span className="text-wrapper-9">Ad Free </span>
                <span className="text-wrapper-10">learning experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Paymentpage;
