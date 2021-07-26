export const parseDate = (date: any) => {
  let newDate: any = new Date(date).toDateString();

  newDate = newDate.toString().split(' ');
  newDate.shift();
  newDate = newDate.join(' ');

  return newDate;
};
