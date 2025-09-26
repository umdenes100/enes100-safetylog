// src/main.js
import { database, ref, push } from './firebase-init.js'; // Corrected import path

document.addEventListener('DOMContentLoaded', () => {
    const ppeForm = document.getElementById('ppeForm');
    const toolForm = document.getElementById('toolForm');
    const machineForm = document.getElementById('machineForm');
    const electronicsForm = document.getElementById('electronicsForm');
    const accidentForm = document.getElementById('accidentForm');

    // Function to collect form data
    function collectFormData(formID) {
        const form = document.getElementById(formID);
        const formData = {};

        if (!form) { // Added a check in case form is null due to incorrect ID
            console.error("Form with ID " + formID + " not found!");
            return {};
        }

        // Collect category buttons that are active
        const activeCategoryButtons = form.querySelectorAll('.tab-button-active:not([name$="Submit"])');
        if (activeCategoryButtons.length > 0) {
            formData.categories = Array.from(activeCategoryButtons).map(btn => btn.value);
        } else {
            formData.categories = ['No Category Selected']; // Or handle as an error
        }

        // Collect date and time
        const dateInput = form.querySelector('input[type="date"]');
        const timeInput = form.querySelector('input[type="time"]');
        if (dateInput && dateInput.value) {
            formData.date = dateInput.value;
        }
        if (timeInput && timeInput.value) {
            formData.time = timeInput.value;
        }

        // Collect notes
        const noteInput = form.querySelector('textarea');
        if (noteInput && noteInput.value) {
            formData.notes = noteInput.value;
        }

        // Add a timestamp for when the data was submitted
        formData.timestamp = new Date().toISOString();

        return formData;
    }

    // Event Listener for PPE Form submission
    ppeForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        const dataToSave = collectFormData('ppeForm');

        try {
            // Push data to a 'ppeCorrections' node in your Realtime Database
            const ppeRef = ref(database, 'ppeCorrections');
            await set(push(ppeRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('PPE Correction data saved successfully!');
            alert('PPE Correction submitted!');
            ppeForm.reset(); // Clear the form after submission
            // Also reset active buttons
            ppeForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));

        } catch (error) {
            console.error('Error saving PPE Correction data:', error);
            alert('Error submitting PPE Correction: ' + error.message);
        }
    });

    // Event Listener for Tool Form submission
    toolForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dataToSave = collectFormData('toolForm');

        try {
            const toolRef = ref(database, 'toolCorrections');
            await set(push(toolRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Tool Correction data saved successfully!');
            alert('Tool Correction submitted!');
            toolForm.reset();
            toolForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error saving Tool Correction data:', error);
            alert('Error submitting Tool Correction: ' + error.message);
        }
    });

    // Event Listener for Machine Form submission
    machineForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        const dataToSave = collectFormData('machineForm');

        try {
            const machineRef = ref(database, 'machineCorrections');
            await set(push(machineRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Machine Correction data saved successfully!');
            alert('Machine Correction submitted!');
            machineForm.reset();
            machineForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error saving Machine Correction data:', error);
            alert('Error submitting Machine Correction: ' + error.message);
        }
    });

    // Event Listener for Electronics Form submission
    electronicsForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        const dataToSave = collectFormData('electronicsForm');

        try {
            const electronicsRef = ref(database, 'electronicsCorrections');
            await set(push(electronicsRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Electronics Correction data saved successfully!');
            alert('Electronics Correction submitted!');
            electronicsForm.reset();
            electronicsForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error saving Electronics Correction data:', error);
            alert('Error submitting Electronics Correction: ' + error.message);
        }
    });

    // Event Listener for Accident Form submission
    accidentForm.addEventListener( 'submit', async (e) => {
        e.preventDefault();

        const dataToSave = collectFormData('accidentForm');

        try {
            const accidentRef = ref(database, 'accident');
            await set(push(accidentRef), dataToSave); // Corrected: push returns a ref, set writes data to that ref
            console.log('Accident data saved successfully!');
            alert('Accident submitted!');
            accidentForm.reset();
            accidentForm.querySelectorAll('.tab-button-active').forEach(btn => btn.classList.remove('tab-button-active'));
        } catch (error) {
            console.error('Error saving Accident data:', error);
            alert('Error submitting Accident: ' + error.message);
        }
    });
});

// Export both the app and database instances for use in other files
export { app, database };