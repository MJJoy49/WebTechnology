// ===== Form Validation =====
document.getElementById("mainForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const donationAmountRadio = document.querySelector('input[name="donationAmount"]:checked');
    const otherAmount = document.getElementById("otherAmount").value.trim();

    if (!fullname || !lastname || !email || (!donationAmountRadio && !otherAmount)) {
        alert("Please fill in all required fields (Full Name, Last Name, Email, Donation Amount).");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    this.submit();
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// ===== Donation Amount Check =====
const donationRadios = document.querySelectorAll('input[name="donationAmount"]');
const otherAmountField = document.getElementById("otherAmount");

donationRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        if (this.id === "other") {
            otherAmountField.style.display = "inline-block";
            otherAmountField.required = true;
        } else {
            otherAmountField.style.display = "none";
            otherAmountField.required = false;
            otherAmountField.value = "";
        }
        updateTotalDonation();
    });
});

// ===== Recurring Donation Fields =====
const recurringCheckbox = document.getElementById("interested");
const mcc = document.getElementById("mcc");
const month = document.getElementById("month");

function toggleRecurringFields() {
    if (recurringCheckbox.checked) {
        mcc.style.display = "inline-block";
        month.style.display = "inline-block";
        mcc.required = true;
        month.required = true;
    } else {
        mcc.style.display = "none";
        month.style.display = "none";
        mcc.required = false;
        month.required = false;
        mcc.value = "";
        month.value = "";
    }
    updateTotalDonation();
}

recurringCheckbox.addEventListener("change", toggleRecurringFields);
toggleRecurringFields();

// ===== Honorarium/In Memory =====
const donationTypeRadios = document.querySelectorAll('input[name="donationType"]');
const honorName = document.getElementById("honorName");

donationTypeRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        if (this.id === "toHonor") {
            honorName.placeholder = "Name to Honor";
        } else if (this.id === "inMemory") {
            honorName.placeholder = "Name in Memory of";
        }
    });
});

// ===== Comments Character Limit =====
const commentsField = document.getElementById("comments");
const charLimit = 200;

commentsField.addEventListener("input", function () {
    if (this.value.length > charLimit) {
        alert("Character limit reached!");
        this.value = this.value.substring(0, charLimit);
    }
});

// ===== Total Donation Calculation =====
function updateTotalDonation() {
    let amount = 0;

    const checkedRadio = document.querySelector('input[name="donationAmount"]:checked');
    if (checkedRadio) {
        if (checkedRadio.id === "other") {
            amount = parseFloat(otherAmountField.value) || 0;
        } else {
            const radioValue = checkedRadio.id.replace("a", "");
            amount = parseFloat(radioValue) || 0;
        }
    }

    let months = 1;
    if (recurringCheckbox.checked) {
        const monthly = parseFloat(mcc.value) || 0;
        months = parseInt(month.value) || 1;
        amount = monthly * months;
    }

    document.getElementById("amount").textContent = `$${amount}`;
    document.getElementById("month").textContent = months;
}

// Update total whenever user types in otherAmount, mcc, or month
otherAmountField.addEventListener("input", updateTotalDonation);
mcc.addEventListener("input", updateTotalDonation);
month.addEventListener("input", updateTotalDonation);
donationRadios.forEach(radio => radio.addEventListener("change", updateTotalDonation));
