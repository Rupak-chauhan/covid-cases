import React from 'react';
import './contactus.css';

const ContactUsComponent = () =>{
    return(
        <div>
            <h1 className="justify-containt-center ml-4 mt-3 mb-4 ">Thank you for contacting to us !</h1>
            <div className="form mb-3">
            
            <div class="mb-3 mr-3 ml-3">
              <label for="exampleFormControlInput1" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            
            <div class="mb-3 mr-3 ml-3">
              <label for="exampleFormControlInput2" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mr-3 ml-3">
              <label for="exampleFormControlTextarea1" class="form-label">textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button class="mt-1 mb-3  ml-3" type="submit">submit</button>
                          
                          
                          
            </div>
        </div>
        
        
        

      
    );
}

export default ContactUsComponent;