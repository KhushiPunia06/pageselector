document.addEventListener('DOMContentLoaded', function () {
  const selectAllCheckbox = document.getElementById('select-all');
  const pageCheckboxes = document.querySelectorAll('.page-checkbox');

  selectAllCheckbox.addEventListener('change', function () {
    pageCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  pageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (!this.checked) {
        selectAllCheckbox.checked = false;
      } else if (Array.from(pageCheckboxes).every(cb => cb.checked)) {
        selectAllCheckbox.checked = true;
      }
    });
  });
});

function submitSelection() {
  const selectedPages = Array.from(document.querySelectorAll('.page-checkbox:checked')).map(cb => cb.value);
  console.log('Selected pages:', selectedPages);

  // Add any additional form submission logic here

  // Redirect to another page
  window.location.href = "https://ellty.notion.site/First-Test-Assignment-6db1cfb744ff4b5fa0b70bd3ccfde442";
}

  