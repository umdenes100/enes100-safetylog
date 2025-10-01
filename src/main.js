import { database, ref, push, set } from './firebase-init.js';

document.addEventListener('DOMContentLoaded', () => {
    const ppeForm = document.getElementById('ppeForm');
    const toolForm = document.getElementById('toolForm');
    const machineForm = document.getElementById('machineForm');
    const electronicsForm = document.getElementById('electronicsForm');
    const accidentForm = document.getElementById('accidentForm');

    function collectFormData(formID) {
        const form = document.getElementById(formID);
        const formData = {};

        if (!form) {
            console.error("Form with ID: \"" + formID + "\" Not Found");
            return {};
        }

        // Save selected category (required)
        const activeCategoryButtons = form.querySelectorAll('.tab-button-active:not([name$="Submit"])');
        if (activeCategoryButtons.length > 0) {
            formData.categories = Array.from(activeCategoryButtons).map(btn => btn.value);
        } else {
            throw new Error("No Category Selected");
        }

        // Save date and time (required)
        const dateInput = form.querySelector('input[type="date"]');
        const timeInput = form.querySelector('input[type="time"]');
        if (dateInput && dateInput.value) {
            formData.date = dateInput.value;
        } else {
            throw new Error("No Date Selected");
        }
        if (timeInput && timeInput.value) {
            formData.time = timeInput.value;
        } else {
            throw new Error("No Time Selected");
        }

        // Save note (optional)
        const noteInput = form.querySelector('textarea');
        if (noteInput && noteInput.value) {
            formData.notes = noteInput.value;
        }

        formData.timestamp = new Date().toISOString();

        return formData;
    }

    // Event Listener for PPE Form submission
    ppeForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        try {
            const dataToSave = collectFormData('ppeForm');
            // Push data to a 'ppeCorrections' node in your Realtime Database
            const ppeRef = ref(database, 'ppeCorrections');
            await set(push(ppeRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('PPE Correction Data Saved Successfully!');
            alert('PPE Correction Submitted!');
            ppeForm.reset(); // Clear the form after submission
            // Also reset active buttons
            ppeForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));

        } catch (error) {
            console.error('Error Saving PPE Correction data:', error);
            alert('Error Submitting PPE Correction: ' + error.message);
        }
    });

    // Event Listener for Tool Form submission
    toolForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const dataToSave = collectFormData('toolForm');
            const toolRef = ref(database, 'toolCorrections');
            await set(push(toolRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Tool Correction Data Saved Successfully!');
            alert('Tool Correction Submitted!');
            toolForm.reset();
            toolForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error Saving Tool Correction data:', error);
            alert('Error Submitting Tool Correction: ' + error.message);
        }
    });

    // Event Listener for Machine Form submission
    machineForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        try {
            const dataToSave = collectFormData('machineForm');
            const machineRef = ref(database, 'machineCorrections');
            await set(push(machineRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Machine Correction Data Saved Successfully!');
            alert('Machine Correction Submitted!');
            machineForm.reset();
            machineForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error Saving Machine Correction data:', error);
            alert('Error Submitting Machine Correction: ' + error.message);
        }
    });

    // Event Listener for Electronics Form submission
    electronicsForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        try {
            const dataToSave = collectFormData('electronicsForm');
            const electronicsRef = ref(database, 'electronicsCorrections');
            await set(push(electronicsRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Electronics Correction Data Saved Successfully!');
            alert('Electronics Correction Submitted!');
            electronicsForm.reset();
            electronicsForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error Saving Electronics Correction data:', error);
            alert('Error Submitting Electronics Correction: ' + error.message);
        }
    });

    // Event Listener for Accident Form submission
    accidentForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        try {
            const dataToSave = collectFormData('accidentForm');
            const accidentRef = ref(database, 'accident');
            await set(push(accidentRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Accident Data Saved Successfully!');
            alert('Accident Submitted!');
            accidentForm.reset();
            accidentForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error Saving Accident data:', error);
            alert('Error Submitting Accident: ' + error.message);
        }
    });
});