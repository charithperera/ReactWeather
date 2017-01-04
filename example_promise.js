function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('Melbourne', function(err, temp) {
  if (err) {
    console.log('error', err);
  }
  else {
    console.log('Success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000)
  })
}

getTempPromise('Melbourne').then(function(temp) {
  console.log('Promise success', temp);
}, function(err) {
  console.log('Promise error', err);
})

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    }
    else {
      reject("Invalid numbers");
    }
  })
}

addPromise(2, 3).then(function(data) {
  console.log("The sum is " + data);
}, function(err) {
  console.log("Error: " + err);
})
