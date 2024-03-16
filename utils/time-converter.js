export function timeConverter(isoTime) {
  const currentTime = Date.now();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const timeUnits = [
    { unit: 'year', value: 1000 * 60 * 60 * 24 * 365 },
    { unit: 'month', value: 1000 * 60 * 60 * 24 * 30 },
    { unit: 'day', value: 1000 * 60 * 60 * 24 },
    { unit: 'hour', value: 1000 * 60 * 60 },
    { unit: 'minute', value: 1000 * 60 },
    { unit: 'second', value: 1000 }
  ];

  for (const unit of timeUnits) {
    const differenceInUnit = Math.floor(timeDifference / unit.value);
    if (differenceInUnit >= 1) {
      return `${differenceInUnit} ${unit.unit}${differenceInUnit !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}