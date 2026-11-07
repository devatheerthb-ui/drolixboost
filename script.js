
function openOrder(service) {
    const serviceInput = document.getElementById("selectedService");
    const orderSection = document.getElementById("order");

    if (!serviceInput || !orderSection) {
        alert("Order form not found. Please refresh the website.");
        return;
    }

    serviceInput.value = service;
    orderSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    setTimeout(() => {
        serviceInput.focus();
    }, 400);
}

async function copyUPI() {
    const upiId = "devatheerthb@okhdfcbank";

    try {
        await navigator.clipboard.writeText(upiId);
        alert("UPI ID copied: " + upiId);
    } catch (error) {
        prompt("Copy your UPI ID:", upiId);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");
    const message = document.getElementById("orderMessage");

    if (!form || !message) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const data = new FormData(form);

        const order = {
            service: data.get("service"),
            instagram: data.get("instagram"),
            name: data.get("name"),
            phone: data.get("phone"),
            transaction: data.get("transaction")
        };

        message.textContent =
            "Your order details are ready. " +
            "This demo has not sent or saved your order. " +
            "Please contact the store owner to arrange submission " +
            "and verify your payment.";

        console.log("Demo order details:", order);
    });
});
