var loader=document.getElementById("preloader")
    window.addEventListener('load',function()
    {
        loader.style.display="none";
    });


const year=new Date().getFullYear();
const py=document.getElementById("year");
py.textContent=year;

// Function to convert UTC date to Indian Standard Time (IST)
function convertToIST(utcDate) {
  const istOffset = 6.5 * 60 * 60 * 1000; // IST is 5 hours and 30 minutes ahead of UTC
  const utcTimestamp = new Date(utcDate).getTime();
  const istTimestamp = utcTimestamp + istOffset;
  return new Date(istTimestamp);
}

// Function to format a date in Indian Standard Time (IST)
function formatDateIST(postedDate) {
  const istDate = convertToIST(postedDate);

  const currentDate = new Date();
  const timeDifference = currentDate - istDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.ceil(seconds / 60); // Round up to the nearest minute
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years Ago`;
  } else if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months Ago`;
  } else if (weeks > 0) {
    return weeks === 1 ? '1 week ago' : `${weeks} weeks Ago`;
  } else if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days Ago`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours Ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes Ago`;
  } else {
    return 'Just now';
  }
}

// Function to update all "Posted on" dates in Indian Standard Time (IST)
function updatePostedDatesIST() {
  const podElements = document.querySelectorAll('.pod');
  podElements.forEach((podElement) => {
    const postedDate = podElement.getAttribute('data-posted-date');
    const formattedDate = formatDateIST(postedDate);
    podElement.textContent = formattedDate;
  });
}

// Call the updatePostedDatesIST function to update all "Posted on" dates in IST
updatePostedDatesIST();
