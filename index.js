// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers,revenue){
  let array = [];
  return drivers.filter(function(driver) {
     let new = driver.revenue > revenue;
  });
  return array
}
