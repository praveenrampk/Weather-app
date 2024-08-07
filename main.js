/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBLE1BQU07QUFDTixxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsbUJBQW1CO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxNQUFNO0FBQ04sbUNBQW1DLG1DQUFtQztBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG4gIGNvbnN0IGVycm9yTWFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTWFnJyk7XG4gIGNvbnN0IHdlYXRoZXJSZXBvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1yZXBvcnQnKTtcbiAgY29uc3QgY2hhbmdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZUJ0bicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rm9ybScpO1xuICBsZXQgY2Vsc2l1cztcbiAgbGV0IGlzRmFocmVuaGVpdCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gY3VycmVudFRlbXBlcmF0dXJlKHRlbXApIHtcbiAgICBjZWxzaXVzID0gTWF0aC5yb3VuZCh0ZW1wIC0gMjczLjE1KTtcbiAgICByZXR1cm4gY2Vsc2l1cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhaHJlbmhlaXQoKSB7XG4gICAgaWYgKGlzRmFocmVuaGVpdCkge1xuICAgICAgd2VhdGhlclJlcG9ydC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoKGNlbHNpdXMgKiA5KSAvIDUgKyAzMil9wrBGYDtcbiAgICAgIGlzRmFocmVuaGVpdCA9IGZhbHNlO1xuICAgICAgY2hhbmdlQnRuLnRleHRDb250ZW50ID0gJ2Rpc3BsYXkgwrBDJztcbiAgICB9IGVsc2Uge1xuICAgICAgd2VhdGhlclJlcG9ydC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXN9wrBDYDtcbiAgICAgIGlzRmFocmVuaGVpdCA9IHRydWU7XG4gICAgICBjaGFuZ2VCdG4udGV4dENvbnRlbnQgPSAnZGlzcGxheSDCsEYnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXkoY2l0eSwgZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXRpdGxlJykudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb3BlcmF0b3ItbGluZWJyZWFrXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9ydC1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID1cbiAgICAgIGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJpbGl0eScpLnRleHRDb250ZW50ID0gYCR7XG4gICAgICBkYXRhLnZpc2liaWxpdHkgLyAxMDAwXG4gICAgfWttYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNfbGlrZScpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXBlcmF0dXJlKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICAgICAgZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICApfcKwY2A7XG4gICAgd2VhdGhlclJlcG9ydC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wZXJhdHVyZShkYXRhLm1haW4udGVtcCl9wrBDYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1SZXNldCgpIHtcbiAgICBlcnJvck1hZy50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSA9ICd0YW1pbCBuYWR1Jykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTVmZDQzYmNhZjg3MDM3OTU3ZmFjYjI5MjVlMzY1MGMyYCxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbW1hLWRhbmdsZVxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGRpc3BsYXkoY2l0eSwgZGF0YSk7XG4gICAgICAgIGZvcm1SZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNYWcudGV4dENvbnRlbnQgPSAnY2l0eSBub3QgZm91bmQnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBlcnJvck1hZy50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBzZWFyY2hCb3gudmFsdWU7XG4gICAgaWYgKHNlYXJjaEJveC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGVycm9yTWFnLnRleHRDb250ZW50ID0gJ1JlcXVpcmVkICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1SZXNldCgpO1xuICAgICAgZ2V0V2VhdGhlcihpbnB1dCk7XG4gICAgfVxuICB9XG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFVzZXJEYXRhKCk7XG4gIH0pO1xuXG4gIGNoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZhaHJlbmhlaXQpO1xuXG4gIGdldFdlYXRoZXIoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=