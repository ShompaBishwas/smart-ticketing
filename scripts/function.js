
//Ticket Button Function
function buyTicketButton(eventId) {
    const event = document.getElementById(eventId);
    event.scrollIntoView({ behavior: 'smooth' });
}

//Click Key reverseCount = remove-seat-number , count = add-seat-number
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let reverseCount = 40;
let selectedSeat = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        event.target.style.backgroundColor = '#1DD100';
        count = count + 1;
        reverseCount = reverseCount - 1;
        const selectedArea = document.getElementById('selected-area');
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("gap-36");
        div.classList.add("pl-16");
        div.classList.add("pr-16");
        const p1 = document.createElement("p");
        p1.innerText = btn.innerText;
        const p2 = document.createElement("p");
        p2.innerText = 'Economoy';
        const p3 = document.createElement("p");
        p3.innerText = '550';

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        selectedArea.appendChild(div);
        const totalCost = document.getElementById('total-cost').innerText;

        const convertTotalCost = parseInt(totalCost);
        document.getElementById("total-cost").innerText = convertTotalCost + parseInt("550");

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        document.getElementById("grand-total").innerText = convertGrandTotal + parseInt("550");

        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function () {
            const couponeValue = document.getElementById("apply-input").value.trim().toUpperCase();
            if(selectedSeat ===4){
                let discountPrice ={NEW15 : 0.15, COUPLE20 : 0.2}[couponeValue];
                if(discountPrice != undefined){
                    let discount = convertTotalCost * discountPrice;
                    applyBtn.innerText = discount;
                    console.log(discount)
                    document.getElementById('grand-total').innerText = convertGrandTotal - discount;
                    document.getElementById('apply-input').style.display ="none";
                }

                else{
                    alert("Invalid Coupone Code");
                }
            }

        });

        //console.log(convertGrandTotal)

        setInnerText('add-seat-number', count, 'remove-seat-number', reverseCount);
    });

    const name = document.getElementById('name-input');
    const number = document.getElementById('number-input');
    const email = document.getElementById('email-input');
    const searchValid = document.getElementById('search-valid');
    const nextBtn = document.getElementById('next-btn');


    searchValid.addEventListener('input', function () {
        if (name.value.trim() !== '' && number.value.trim() !== '' && email.value.trim() !== '') {
            nextBtn.disabled = false;

        }
        else {
            nextBtn.disabled = true;
        }

    });


    const hideSection = document.getElementById('hide-page');
    function hideShow() {
        hideSection.classList.remove('hidden');
    }
    function removeShoe() {
        hideSection.classList.add('hidden');
    }

}





//
function setInnerText(id1, value1, id2, value2) {
    document.getElementById(id1).innerText = value1;
    document.getElementById(id2).innerText = value2;
}

