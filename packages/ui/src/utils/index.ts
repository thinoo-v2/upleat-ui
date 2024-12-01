export function cn(...classes: (string | boolean | undefined | null | { [key: string]: boolean })[]): string {
  return classes
    .filter(Boolean)
    .map((entry) => {
      if (typeof entry === 'string') return entry;
      if (typeof entry === 'object') {
        return Object.entries(entry)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
} 