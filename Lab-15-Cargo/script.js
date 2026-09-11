// Convert weight to kilograms without changing the original object
function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  // Convert pounds to kilograms
  if (manifest.unit === "lb") {
    normalizedManifest.weight = manifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

// Check whether the cargo manifest has valid properties
function validateManifest(manifest) {
  const errors = {};

  // Check container ID
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // Check destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // Check weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // Check weight unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // Check hazmat value
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

// Process and display the cargo manifest result
function processManifest(manifest) {
  const errors = validateManifest(manifest);

  // If there are no validation errors
  if (Object.keys(errors).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
processManifest({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
});
processManifest({
  containerId: -88,
  destination: "Soledad",
  weight: NaN,
});
