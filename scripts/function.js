
//Ticket Button Function
function buyTicketButton(eventId) {
    const event = document.getElementById(eventId);
    event.scrollIntoView({ behavior: 'smooth' });
}

//Click Key reverseCount = remove-seat-number , count = add-seat-number
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let reverseCount = 32;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
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
        console.log(convertTotalCost)

        setInnerText('add-seat-number', count, 'remove-seat-number', reverseCount);
    });
}

//
function setInnerText(id1, value1, id2, value2) {
    document.getElementById(id1).innerText = value1;
    document.getElementById(id2).innerText = value2;
}