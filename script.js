// ============ Vehicle Page ============
if (document.querySelector('.vehicle-grid')) {
    const vehicles = document.querySelectorAll('.vehicle');
    const savedVehicle = localStorage.getItem('selectedVehicle');

    vehicles.forEach(vehicle => {
        const label = vehicle.querySelector('p')?.textContent;

        // Highlight saved selection
        if (savedVehicle === label) {
            vehicle.classList.add('selected');
        }

        vehicle.addEventListener('click', (e) => {
            e.preventDefault();
            const label = vehicle.querySelector('p')?.textContent;
        
            localStorage.setItem('selectedVehicle', label);
        
            vehicles.forEach(v => v.classList.remove('selected'));
            vehicle.classList.add('selected');
        
            setTimeout(() => {
                window.location.href = vehicle.getAttribute('href');
            }, 200);
        });
        
    });
}

// ============ Budget Page ============
if (document.querySelector('.budget-options')) {
    const budgets = document.querySelectorAll('.budget-option');
    const savedBudget = localStorage.getItem('selectedBudget');

    budgets.forEach(option => {
        if (savedBudget === option.textContent) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            // Save selection
            localStorage.setItem('selectedBudget', option.textContent);

            // Highlight only the selected one
            budgets.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// ============ Trade-In Page ============
if (document.querySelector('.trade-options')) {
    const tradeOptions = document.querySelectorAll('.trade-option');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    // Load saved selections
    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;

    // Map vehicle name to image filenames
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Handle Trade-In selection
    const savedTrade = localStorage.getItem('tradeInChoice');
    tradeOptions.forEach(option => {
        if (option.textContent === savedTrade) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('tradeInChoice', option.textContent);
            tradeOptions.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// ============ Credit Score Page ============
if (document.querySelector('.credit-options')) {
    const creditOptions = document.querySelectorAll('.credit-option');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    const savedCredit = localStorage.getItem('creditStatus');

    creditOptions.forEach(option => {
        if (option.textContent === savedCredit) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('creditStatus', option.textContent);
            creditOptions.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}


// ============ Employment Page ============
if (document.querySelector('.employment-options')) {
    const employmentOptions = document.querySelectorAll('.employment-option');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    const savedEmployment = localStorage.getItem('employmentStatus');

    employmentOptions.forEach(option => {
        if (option.textContent === savedEmployment) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('employmentStatus', option.textContent);
            employmentOptions.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// ============ Income Page ============
if (document.getElementById('monthly-income')) {
    const incomeInput = document.getElementById('monthly-income');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Load previously saved income
    const savedIncome = localStorage.getItem('monthlyIncome');
    if (savedIncome) incomeInput.value = savedIncome;

    // Save on change
    incomeInput.addEventListener('input', () => {
        localStorage.setItem('monthlyIncome', incomeInput.value);
    });
}


// ============ Employment Duration Page ============
if (document.getElementById('employment-years') && document.getElementById('employment-months')) {
    const yearsInput = document.getElementById('employment-years');
    const monthsInput = document.getElementById('employment-months');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Load saved values
    const savedYears = localStorage.getItem('employmentYears');
    const savedMonths = localStorage.getItem('employmentMonths');

    if (savedYears) yearsInput.value = savedYears;
    if (savedMonths) monthsInput.value = savedMonths;

    // Save on change
    yearsInput.addEventListener('input', () => {
        localStorage.setItem('employmentYears', yearsInput.value);
    });

    monthsInput.addEventListener('input', () => {
        localStorage.setItem('employmentMonths', monthsInput.value);
    });
}


// ============ Employment Details Page ============
if (document.getElementById('company-name') && document.getElementById('position-title')) {
    const companyInput = document.getElementById('company-name');
    const positionInput = document.getElementById('position-title');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Load saved values
    const savedCompany = localStorage.getItem('employmentCompany');
    const savedPosition = localStorage.getItem('employmentPosition');

    if (savedCompany) companyInput.value = savedCompany;
    if (savedPosition) positionInput.value = savedPosition;

    // Save on change
    companyInput.addEventListener('input', () => {
        localStorage.setItem('employmentCompany', companyInput.value);
    });

    positionInput.addEventListener('input', () => {
        localStorage.setItem('employmentPosition', positionInput.value);
    });
}


// ============ Address Page ============
if (document.getElementById('autocomplete-address')) {
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');
    const addressInput = document.getElementById('autocomplete-address');
    const toggleManual = document.getElementById('toggle-manual');
    const manualSection = document.getElementById('manual-address');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Load saved autocomplete address
    const savedAutoAddress = localStorage.getItem('autocompleteAddress');
    if (savedAutoAddress) addressInput.value = savedAutoAddress;

    addressInput.addEventListener('input', () => {
        localStorage.setItem('autocompleteAddress', addressInput.value);
    });

    // Manual form toggle
    toggleManual.addEventListener('click', () => {
        manualSection.classList.toggle('hidden');
    });

    // Load and save manual fields
    ['street', 'city', 'province', 'postal-code'].forEach(id => {
        const el = document.getElementById(id);
        const key = `address_${id}`;
        if (el && localStorage.getItem(key)) {
            el.value = localStorage.getItem(key);
        }
        if (el) {
            el.addEventListener('input', () => {
                localStorage.setItem(key, el.value);
            });
        }
    });
}


// ============ Address Duration Page ============
if (document.getElementById('address-years') && document.getElementById('address-months')) {
    const yearsInput = document.getElementById('address-years');
    const monthsInput = document.getElementById('address-months');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Load saved values
    const savedYears = localStorage.getItem('addressYears');
    const savedMonths = localStorage.getItem('addressMonths');

    if (savedYears) yearsInput.value = savedYears;
    if (savedMonths) monthsInput.value = savedMonths;

    // Save on change
    yearsInput.addEventListener('input', () => {
        localStorage.setItem('addressYears', yearsInput.value);
    });

    monthsInput.addEventListener('input', () => {
        localStorage.setItem('addressMonths', monthsInput.value);
    });
}


// ============ Housing Page ============
if (document.querySelector('.housing-options')) {
    const housingOptions = document.querySelectorAll('.housing-option');
    const paymentInput = document.getElementById('monthly-housing-payment');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Restore previous housing selection
    const savedHousingType = localStorage.getItem('housingType');
    const savedPayment = localStorage.getItem('monthlyHousingPayment');

    housingOptions.forEach(option => {
        if (savedHousingType === option.textContent) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('housingType', option.textContent);
            housingOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    if (savedPayment) paymentInput.value = savedPayment;

    paymentInput.addEventListener('input', () => {
        localStorage.setItem('monthlyHousingPayment', paymentInput.value);
    });
}


// ============ Residency Page ============
if (document.getElementById('citizenship-options') && document.getElementById('license-options')) {
    const citizenshipOptions = document.querySelectorAll('#citizenship-options .yes-no-option');
    const licenseOptions = document.querySelectorAll('#license-options .yes-no-option');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    const savedCitizen = localStorage.getItem('isCanadianResident');
    const savedLicense = localStorage.getItem('hasCanadianLicense');

    citizenshipOptions.forEach(option => {
        if (savedCitizen === option.textContent) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('isCanadianResident', option.textContent);
            citizenshipOptions.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    licenseOptions.forEach(option => {
        if (savedLicense === option.textContent) {
            option.classList.add('selected');
        }

        option.addEventListener('click', () => {
            localStorage.setItem('hasCanadianLicense', option.textContent);
            licenseOptions.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}


// ============ Date of Birth Page ============
if (document.getElementById('dob')) {
    const dobInput = document.getElementById('dob');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    // Restore previously saved DOB
    const savedDOB = localStorage.getItem('userDOB');
    if (savedDOB) dobInput.value = savedDOB;

    // Auto-format with slashes and restrict to dd/mm/yyyy
    dobInput.addEventListener('input', (e) => {
        let value = dobInput.value.replace(/\D/g, ''); // remove non-digits
        if (value.length > 8) value = value.slice(0, 8); // max 8 digits

        let formatted = '';
        if (value.length > 4) {
            formatted = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
        } else if (value.length > 2) {
            formatted = `${value.slice(0, 2)}/${value.slice(2)}`;
        } else {
            formatted = value;
        }

        dobInput.value = formatted;
        localStorage.setItem('userDOB', formatted);
    });
}


// ============ Name Page ============
if (document.getElementById('first-name')) {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');

    if (savedFirstName) firstNameInput.value = savedFirstName;
    if (savedLastName) lastNameInput.value = savedLastName;

    firstNameInput.addEventListener('input', () => {
        localStorage.setItem('firstName', firstNameInput.value);
    });

    lastNameInput.addEventListener('input', () => {
        localStorage.setItem('lastName', lastNameInput.value);
    });
}


// ============ Contact Page ============
if (document.getElementById('email') && document.getElementById('phone')) {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const vehicleSummary = document.getElementById('vehicle-summary');
    const budgetSummary = document.getElementById('budget-summary');
    const vehicleImage = document.getElementById('vehicle-image');

    const selectedVehicle = localStorage.getItem('selectedVehicle') || 'Not selected';
    const selectedBudget = localStorage.getItem('selectedBudget') || 'Not selected';
    const vehicleImageMap = {
        "Coupes": "images/coupe.svg",
        "Hatchbacks": "images/hatchback.svg",
        "Sedans": "images/sedan.svg",
        "Minivans": "images/minivan.svg",
        "SUVs & Crossovers": "images/suv.svg",
        "Trucks": "images/truck.svg"
    };

    if (vehicleSummary) vehicleSummary.textContent = `Vehicle: ${selectedVehicle}`;
    if (budgetSummary) budgetSummary.textContent = `Budget: ${selectedBudget}`;
    if (vehicleImage && vehicleImageMap[selectedVehicle]) {
        vehicleImage.src = vehicleImageMap[selectedVehicle];
        vehicleImage.alt = selectedVehicle;
    }

    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');

    if (savedEmail) emailInput.value = savedEmail;
    if (savedPhone) phoneInput.value = savedPhone;

    emailInput.addEventListener('input', () => {
        localStorage.setItem('userEmail', emailInput.value);
    });

    phoneInput.addEventListener('input', () => {
        localStorage.setItem('userPhone', phoneInput.value);
    });
}

