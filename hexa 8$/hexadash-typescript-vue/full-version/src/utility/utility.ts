/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text: string, size: number) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

/**
 * Return idGenerator of a given id of length
 * @param {array} data
 * @param {number} length
 */

const idGenerator = (data: any[], length: number = 1) => {
  const arrayData: number[] = [];
  data.map((data: any) => {
    return arrayData.push(parseInt(data.id, 10));
  });
  const number = (Math.max(...arrayData) + 1).toString();
  return number.length < length ? `${'0'.repeat(length - number.length)}${number}` : number;
};

export { ellipsis, idGenerator };
