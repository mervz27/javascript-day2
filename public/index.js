// DOM Manipulation and Event Handling

/** 1. QUERY SELECTOR */
    // query selector
    const elementByID = document.getElementById("element-id");
    //console.log(elementByID.textContent);

    const elemID = document.querySelector("#element-id");
    //console.log(`THIS IS FROM QUERYSELECTOR ${elemID.textContent}`);
    // getElementByID
    // getElementsByClass

    const elemClass = document.getElementsByClassName('text-bg-warning');
    //console.log(elemClass);

    const elemClassQ = document.querySelector(".text-bg-warning");
    //console.log(elemClassQ);
    // getElementsByTag

    const elemTag = document.getElementsByTagName('p');
    //console.log(elemTag);

    const elemTagQ = document.querySelector("p");
    //console.log(elemTagQ);

    // query selector All
    const queryAll = document.querySelectorAll(".fw-medium");
    // queryAll.forEach( elem =>
    //     console.log(elem.innerText)
    // );


/** 2. ACCESSING HTML CONTENT */
    //innerHTML
    const elementMain = document.querySelector("#text-selector");
    //console.log(elementMain.innerHTML);
    //innerText
    //console.log(elementMain.innerText);
    //textContent
    //console.log(elementMain.textContent);
    let newHTML = `<p class="text-success">Hello world</p>`;
    elementMain.innerHTML = newHTML;

    const btnAssign = document.querySelector("#btn-add-fix-name");
    const textField = document.querySelector("#fix-name");
    const randText = document.querySelector(".text-bg-primary.fs-3");

    btnAssign.addEventListener("click", function(){
        textField.value = "THIS IS A FIX VALUE";
        randText.innerHTML = "THIS IS A FIX VALUE";
    });
    
    const btnGetInput = document.querySelector("#btn-get-input");
    const inputField = document.querySelector("#input-text");
    const yourText = document.querySelector("#your-text");
    const fixText = "Your Text Input:";
    btnGetInput.addEventListener("click", function(){
        yourText.innerText = fixText + inputField.value;
        
    });
    
/** 3. ATTRIBUTE MANIPULATION */
    //getAttribute
    const linkText = document.querySelector("#link-tag");
    //console.log(linkText.getAttribute('target'));
    
    // if(linkText.getAttribute('href') == "#accessors"){
    //     linkText.setAttribute('href',"https://www.facebook.com/");
    // }
    //console.log(linkText.href);
    if(linkText.href == "#accessors"){
        linkText.href = "https://www.facebook.com/";
    }

    //setAttribute
    const imgElem = document.querySelector("#empty-img");
    imgElem.setAttribute('src',"public/img/js-logo.png");
    //removeAttribute
    //property attribute
    //dataset property
    const randBtn = document.querySelector("#btn-random");
    console.log(randBtn.dataset.sample1);

    const switchBtn = document.querySelector("#switch-btn");
    
    switchBtn.addEventListener("click", function(){
        const successModal = document.querySelector("#success-modal");
        const warningModal = document.querySelector("#warning-modal");

        if(successModal.dataset.bsTarget == "#successModal"){
            successModal.dataset.bsTarget = "#warningModal";
            switchBtn.setAttribute("class","btn btn-primary");
        } else {
            successModal.dataset.bsTarget = "#successModal";
            switchBtn.setAttribute("class","btn btn-danger");
        } 
        
    });

/** 4. CLASS MANIPULATION */
    //classList vs className
    //.add()
    //.remove()
    //.toggle()
    //.contains

/** 5. ELEMENT MANIPULATION */
    //Literal syntax
    //createElement
    
/** 6. EVENT HANDLING */
