fetch('https://api.giphy.com/v1/gifs/translate?api_key=8gNQz2BswlEiVYCRHWLV4EZLG5INda7T&s=cats',
{
    mode: 'cors'
  })
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
  })
    // Error :(