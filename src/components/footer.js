import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="background" />
      <p className="text-1">PHACO Course (Hands On) ECCE Course 2RY IOL Course (Hands On) FEMTO LASIK/SMILE Course (Hands ON)</p>
      <p className="text-2">LASIK/PRK Training Course (Hands ON) ICL Course (Hands ON) (PKP) Course (Dry & Wet lab) (DALK) Course (Dry & Wet lab)</p>
      <p className="text-3">Suturing Course (Dry & Wet lab) PPV Course (Hands ON) Your Journey with FTC Trainees’ Benefits Glaucoma wet lab</p>
      <p className="text-4">Our Experts Why FTC? Testimonials Oculoplasty surgeries FAQs</p>
      <button className="button">
        <span className="text-6">Book Now</span>
      </button>
      {/* Update `src` attributes with correct image paths */}
      <img src="" alt="Description" />
    </div>
  );
};

export default Footer; // Ensure this matches your import in App.js
