/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Correct calculations
const newDistance = (velocity * (time / 3600)); //calculates new distance in km
const remainingFuel = fuel - (fuelBurnRate * time); //calculates remaining fuel

// Correctly handle potential errors in function calling
const calcNewVel = (velocity, acceleration, time) => {
    // Ensure time is not negative
    if (time < 0) {
        console.error('Time cannot be negative.');
        return velocity; // No change in velocity if time is invalid
    }
    const accelerationInKmH2 = acceleration * 3.6;
    return velocity + (accelerationInKmH2 * (time / 3600)); // Use time in hours
}

// Calculate new velocity correctly
const newVelocity = calcNewVel(velocity, acceleration, time);

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);




