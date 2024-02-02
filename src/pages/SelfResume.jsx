import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';







const SelfResume = () => {

  const handleDownload = () => {
    const pdfUrl = "https://docs.google.com/document/d/1wtQamp-rqSuqzYrof7e8fJucxCxq3OaYVL98fHIzPsc/edit?usp=sharing";
    
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Saloni Sunil Patil_Resume.pdf"; 
    link.target = "_blank";
    link.rel="nooopener noreferrer";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  


  return (
    <section className='max-container'>

      <h1 className='head-text'>This is my <span className='blue-gradient_text font-semibold drop-shadow'>Resume</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Read or download my resume!
        </p>
      </div> 


      <div className='mt-5 flex flex-col gap-3'>
        <button className='btn centered-button' onClick={handleDownload}>Click here to view or download!</button>
      </div>
    </section>
  )
}

export default SelfResume
