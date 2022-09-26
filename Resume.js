    function firstDiv () {
        const mainDiv = document.createElement('div');   document.body.appendChild(mainDiv);
        mainDiv.setAttribute('id', 'MainDiv'); console.log(mainDiv);
        
        const titleName = document.createElement('h1');   mainDiv.appendChild(titleName);
        titleName.innerHTML = '<em> Enter Your Full Name </em>';   titleName.style.textAlign = 'center';
        
        const addressPhone = document.createElement('p');
        mainDiv.appendChild(addressPhone).setAttribute('class', 'address');
        addressPhone.innerHTML = 'Address &#8226; Phone Number'; 
        
        const moreContactInfo = document.createElement('p');
        mainDiv.appendChild(moreContactInfo).setAttribute('class', 'contactInfo');
        moreContactInfo.innerHTML = 'Email &#8226; Linkedin &#8226; Website/Github';

        secondDivEl();
    }
        
        
    function secondDivEl() {
        const secondDiv = document.createElement('div');
        document.body.appendChild(secondDiv);
        secondDiv.setAttribute('id', 'secondDiv'); console.log(secondDiv);

        const profile = document.createElement('p');
        secondDiv.appendChild(profile);   
        profile.innerHTML = '<input type="text" placeholder="Summarize your career goals" class="career"></input>';
    }
        