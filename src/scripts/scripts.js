log ("did i load")

function log(message) {
    console.log(message)
}
//Below is the script i got from Gemini as I have a very specific idea of how I want this booking form and this website to work, which requires some extra research and utlizing some of my own initiative to achieve. It does mean I am adding further things to learn and stress about upon myself. But I want to be happy with the work I create, even if it means going out of my depth!
///I will mark this as the start of the experimental code with 'unicorn' and 
<script>
const fileInput = document.getElementById('reference');
const previewContainer = document.getElementById('preview-container');
const form = document.getElementById('booking-form');
fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
        if (!selectedFiles.some(f => f.name === file.name && f.size === file.size))
            selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = (event) => {
            const wrapper = document.createElement ('div');
            wrapper.style.position = 'relative';

            wrapper.innerHTML = 
            '<img src=' + event.target.result + "style = "width: 80px; height:80px; object-fit: cover; border-radius: 4px; border:1px solid #ccc;">
                <button type="button" class="remove-btn" style="position: absolute; top: -5px; right: -5px; background: red; color: white; border: none; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;">✕</button>';

            wrapper.querySelector('remove-btn').addEventListener('click', () => {
                selectedFiles= selectedFiles.filter(f => f !== file);
                wrapper.remove();
            });
        
            previewContainer.appendChild(wrapper);
        };
        reader.readAsDataURL(file);
    }
});
fileInput.value = '';
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(form);

    selectedFiles.forEach(file => {
        formData.append('reference[]' file);
    });

     try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert('Inquiry sent successfully!');
        form.reset();
        selectedFiles = [];
        previewContainer.innerHTML = '';
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    }
  });
</script>
//delete script above//