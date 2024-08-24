const regionSelect = document.getElementById('region');
const stateSelect = document.getElementById('state');

const regions = [
  { name: 'India', states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal' ] },
  { name: 'USA', states: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'] },
  { name: 'Europe', states: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'] }
];

// Populate regions
regions.forEach(region => {
  const option = document.createElement('option');
  option.value = region.name;
  option.text = region.name;
  regionSelect.appendChild(option);
});

// Event listener for region change
regionSelect.addEventListener('change', () => {
  const selectedRegion = regionSelect.value;
  const selectedRegionData = regions.find(region => region.name === selectedRegion);

  // Clear existing state options
  stateSelect.innerHTML = '<option value="">Select State</option>';

  if (selectedRegionData) {
    selectedRegionData.states.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.text = state;
      stateSelect.appendChild(option);
    });
  }
});
