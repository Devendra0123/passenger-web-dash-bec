export const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    // Function to add ordinal suffix to the day
    const getOrdinalSuffix = (num) => {
      const suffixes = ['th', 'st', 'nd', 'rd'];
      const v = num % 100;
      return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    const formattedDate = `${getOrdinalSuffix(day)} ${month} ${year}`;
    return formattedDate;
  };