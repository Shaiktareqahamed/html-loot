// Add event listener to the button
document.querySelector('button').addEventListener('click', () => {
    // Handle button click logic here
    console.log('Button clicked!');
});

// Add event listener to the subscription plan buttons
document.querySelectorAll('.subscription-plan button').forEach((button) => {
    button.addEventListener('click', () => {
        // Handle subscription plan selection logic here
        console.log('Subscription plan selected!');
    });
});