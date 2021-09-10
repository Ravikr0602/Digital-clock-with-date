function DisplayTime() {
    var date = new Date();
  
    /* time */
  var hour,
      minute = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes(),
      second = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds(),
      time_Format = (date.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (date.getHours() == 0) 
    {
      hour = 12;
    }
    else if (date.getHours() > 12) 
    {
      hour = date.getHours() - 12;
    } 
    else 
    {
      hour = date.getHours();
    }
  
    var currentTime = hour + ":" + minute + ":" + second;
  
    // Display time
    document.getElementsByClassName("time")[0].innerHTML = currentTime;
    document.getElementsByClassName("time_format")[0].innerHTML = time_Format;
  
    /* date store in days name and months name in array */
    var day_name = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month_name = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    day = date.getDate(); //The getDate() method returns the day of the month for the specified date according to local time.
  
    // store date in currentdate variable
    var currentDate = day_name[date.getDay()] + ", " + month_name[date.getMonth()] + " " + day;
  
    document.getElementsByClassName("Display_date")[0].innerHTML = currentDate;
  };
  
  // display time and date , that update every second
  DisplayTime();
  setInterval(function() {
  DisplayTime()
  }, 1000);