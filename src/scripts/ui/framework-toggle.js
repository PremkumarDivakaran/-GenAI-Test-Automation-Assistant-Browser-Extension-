function toggleFrameworkSubOptions(tool) {
    const container = document.getElementById('frameworkOptions');
    container.innerHTML = '';
  
    if (tool === 'SELENIUM') {
      container.innerHTML = `
        <label>
          <input type="radio" name="seleniumOption" value="CUCUMBER" />
          Cucumber
        </label>
        <label>
          <input type="radio" name="seleniumOption" value="POM" />
          Page Object Model
        </label>
      `;
    } else if (tool === 'PLAYWRIGHT') {
      container.innerHTML = `
        <label>
          <input type="radio" name="playwrightOption" value="POM" />
          Page Object Model
        </label>
      `;
    }
  }
  
  // Add event listeners when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const seleniumRadio = document.getElementById('toolSelenium');
    const playwrightRadio = document.getElementById('toolPlaywright');
  
    if (seleniumRadio) {
      seleniumRadio.addEventListener('change', () => toggleFrameworkSubOptions('SELENIUM'));
    }
  
    if (playwrightRadio) {
      playwrightRadio.addEventListener('change', () => toggleFrameworkSubOptions('PLAYWRIGHT'));
    }
  });
  