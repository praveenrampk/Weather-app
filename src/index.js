(() => {
  const searchBtn = document.querySelector('.search-button');
  const errorMag = document.querySelector('.errorMag');
  const weatherReport = document.querySelector('.weather-report');
  const changeBtn = document.querySelector('.changeBtn');
  const form = document.querySelector('.inputForm');
  let celsius;
  let isFahrenheit = true;

  function currentTemperature(temp) {
    celsius = Math.round(temp - 273.15);
    return celsius;
  }

  function fahrenheit() {
    if (isFahrenheit) {
      weatherReport.textContent = `${Math.round((celsius * 9) / 5 + 32)}°F`;
      isFahrenheit = false;
      changeBtn.textContent = 'display °C';
    } else {
      weatherReport.textContent = `${celsius}°C`;
      isFahrenheit = true;
      changeBtn.textContent = 'display °F';
    }
  }

  function display(city, data) {
    document.querySelector('.location').textContent = data.name;
    document.querySelector('.weather-title').textContent = data.weather[0].main;
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.report-description').textContent =
      data.weather[0].description;
    document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
    document.querySelector('.visibility').textContent = `${
      data.visibility / 1000
    }km`;
    document.querySelector('.feels_like').textContent = `${currentTemperature(
      // eslint-disable-next-line comma-dangle
      data.main.feels_like
    )}°c`;
    weatherReport.textContent = `${currentTemperature(data.main.temp)}°C`;
  }

  function formReset() {
    errorMag.textContent = '';
    form.reset();
  }

  async function getWeather(city = 'tamil nadu') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fd43bcaf87037957facb2925e3650c2`,
        // eslint-disable-next-line comma-dangle
        { mode: 'cors' }
      );
      if (response.ok) {
        const data = await response.json();
        display(city, data);
        formReset();
      } else {
        errorMag.textContent = 'city not found';
      }
    } catch (error) {
      errorMag.textContent = error;
    }
  }

  function getUserData() {
    const searchBox = document.querySelector('.city');
    const input = searchBox.value;
    if (searchBox.validity.valueMissing) {
      errorMag.textContent = 'Required ';
    } else {
      formReset();
      getWeather(input);
    }
  }
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getUserData();
  });

  changeBtn.addEventListener('click', fahrenheit);

  getWeather();
})();
