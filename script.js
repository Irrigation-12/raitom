document.getElementById('instructionBtn').addEventListener('click', () => {
  alert("Instructions:\n1. Select planting date.\n2. Choose location.\n3. Choose crop.\n4. Enter water depth.");
});

document.getElementById('cropBtn').addEventListener('click', () => {
  const crop = document.getElementById('cropType').value;
  if (crop) {
    alert(`You selected ${crop} as your crop.`);
  } else {
    alert("Please select a crop first.");
  }
});
