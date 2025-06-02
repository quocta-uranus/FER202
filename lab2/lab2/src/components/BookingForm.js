import React from "react";

function BookingForm() {
  return (
    <section id="contact" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Book Your Table</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select">
              <option selected>Select a Service</option>
              <option value="dine-in">Dine In</option>
              <option value="takeaway">Takeaway</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Please write your comment"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning px-4 py-2">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;