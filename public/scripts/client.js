console.log('in client.js');

document.getElementById('getText').addEventListener('click', getText);

function getText() {
  console.log('in getText');
  // Fetch returns a promise -> a placeholder for the response that will
  // be received asynchronously
  fetch('sample.txt').
    then(function(res) {
    console.log(res);
    return res.text();
  }).then(function(data) {
      console.log(data);
  });
} // end getText()

getText();
