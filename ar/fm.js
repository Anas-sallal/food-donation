document.getElementById("message").textContent = "";

document.getElementById("formcontent").addEventListener(
    "submit",
    function (event){
        event.preventDefault();
        document.getElementById("message").textContent = " تم إرسال الطلب بنجاح. ";
    }
);

